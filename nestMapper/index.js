import mermaid from 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs';

async function getGraphData() {
    const baseUrl = 'http://localhost:8081';
    const response = await fetch(baseUrl + '/devtools', {
        credentials: 'include',
    });

    if (!response.ok) {
        throw new Error('Failed to fetch graph data');
    }

    const data = await response.json();
    const nodeData = Object.entries(data.nodes);
    const cleanedNodeData = transformNodeData(nodeData);
    const edgesData = Object.entries(data.edges);
    const cleanEdgeData = transformEdgeData(edgesData);
    return [cleanedNodeData, cleanEdgeData];
}

function transformNodeData(data) {
    return data
        .filter(([key, value]) => {
            return ['Http', 'Jwt', 'App'].every((term) => {
                return !value.label.includes(term);
            });
        })
        .reduce((acc, [key, value]) => {
            const newLabel = value.label
                .replace(/[\(\[]/gm, '-')
                .replace(/[\)\]]/gm, '');

            acc[value.id] = `${newLabel}(${newLabel})`;
            return acc;
        }, {});
}

function transformEdgeData(data) {
    return data
        .filter(([key, value]) => value.metadata?.type == 'class-to-class')
        .map(([key, value]) => {
            return [value.source, value.target];
        });
}

async function createNodeString() {
    try {
        const [cleanedNodeData, cleanEdgeData] = await getGraphData();

        // helper function to sort nodes based on name
        const filterSortEdges = (data, sourceName, targetName) =>
            data
                .filter(([source, target]) => {
                    return (
                        source.includes(sourceName) &&
                        target.includes(targetName)
                    );
                })
                .sort();

        const filteredEdgeData = cleanEdgeData
            .map(([sourceId, targetId]) => {
                return [cleanedNodeData[sourceId], cleanedNodeData[targetId]];
            })
            .filter(([source, target]) => {
                return source != target;
            })
            .filter(([source, target]) => source && target);

        const controllerEdges = filterSortEdges(
            filteredEdgeData,
            'Controller',
            'Service',
        );

        const serviceToserviceEdges = filterSortEdges(
            filteredEdgeData,
            'Service',
            'Service',
        );

        const serviceToRepoEdges = filterSortEdges(
            filteredEdgeData,
            'Service',
            'Repository',
        );

        const edgeStrings = [
            ...controllerEdges,
            ...serviceToserviceEdges,
            ...serviceToRepoEdges,
        ].map(([source, target]) => [source, target].join(' --> '));

        const uniqueEdgeStrings = Array.from(new Set(edgeStrings)).join('\n');

        const stylingStrings = Object.entries(cleanedNodeData).reduce(
            (acc, [id, label]) => {
                const bracketIndex = label.indexOf('(');
                const nodeName = label.slice(0, bracketIndex);

                if (nodeName.includes('Repo')) {
                    acc += `style ${nodeName} fill:#8ed1fc \n`;
                }

                if (nodeName.includes('Service')) {
                    acc += `style ${nodeName} fill:#fcb900 \n`;
                }
                return acc;
            },
            '',
        );

        return 'flowchart LR\n' + stylingStrings + uniqueEdgeStrings;
    } catch (e) {
        console.error(e);
        throw e;
    }
}

async function createMermaidChart() {
    try {
        const finalMermaidString = await createNodeString();

        mermaid.initialize({
            startOnLoad: false,
            theme: 'forest',
            fontFamily: 'sans-serif, system-ui',
        });

        const mermaidContainer = document.getElementById('mermaid-container');
        if (!mermaidContainer)
            throw new Error('Mermaid container was not found');

        mermaidContainer.textContent = finalMermaidString;

        // render the mermaid chart via the chart definition
        await mermaid.run({ nodes: [mermaidContainer] });
    } catch (error) {
        console.error('Error creating Mermaid chart:', error);
    }
}

createMermaidChart();
