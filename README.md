<a name="readme-top"></a>

<!-- PROJECT SHIELDS -->

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]

<!-- PROJECT LOGO -->
<div align="center">
<h3 align="center">nestMapper</h3>

  <p align="center">
    nestMapper is an open-source alternative to the NestJs DevTool dependency mapper UI. It's designed to help developers visualize and understand the dependencies in their NestJs projects.
    <br />
    <a href="https://github.com/staceyjf/nestMapper"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="">View Demo</a>
    ·
    <a href="https://github.com/staceyjf/nestMapper/issues/new?labels=bug&template=bug-report---.md">Report Bug</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![Next][Next.js]][Next-url]
- [![Mermaid.js][Mermaid-shield]][Mermaid-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/staceyjf/nestMapper.git
   ```
2. Switch to the repo folder
   ```sh
   cd nestMapper
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Copy config file and set JsonWebToken secret key`

   ```sh
   cp src/config.ts.example src/config.ts
   ```

5. Create a new mysql database with the name `nestMapperExample`\
   (or the name you specified in the ormconfig.json)

6. Copy TypeORM config example file for database settings

   ```sh
   cp ormconfig.json.example ormconfig.json
   ```

   and update with your mysql database settings

```
  {
    "type": "mysql",
    "host": "localhost",
    "port": 3306,
    "username": "your-mysql-username",
    "password": "your-mysql-password",
    "database": "nestjsrealworld",
    "entities": ["src/**/**.entity{.ts,.js}"],
    "synchronize": true
  }
```

7. Start local mysql server and create new database 'nestjsrealworld'.

- On application start, tables for all entities will be created.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Stacey Fanner - staceyfanner@gmail.com

Project Link: [https://github.com/staceyjf/nestMapper](https://github.com/staceyjf/nestMapper)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [NestJS DevTools](https://docs.nestjs.com/devtools/overview) for providing the dependency mapping capability to collect metadata.
- [Mermaid.js](https://mermaid.js.org/intro/) for the visualization tools to turn the metadata into chart visualization.
- [nology](https://www.linkedin.com/company/nology-io/posts/?feedView=all) for allowing me to share this application, which myself and my partner (Chloe Ballantyne) developed for their internal learning management system while participating in their career switchers' program.
- [nology](https://github.com/lujakob/nestjs-realworld-example-app) for providing a real world NestJS codebase for me to be able to demo NestMapper.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/staceyjf/nestMapper.svg?style=for-the-badge
[contributors-url]: https://github.com/staceyjf/nestMapper/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/staceyjf/nestMapper.svg?style=for-the-badge
[forks-url]: https://github.com/staceyjf/nestMapper/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/staceyjf/nestMapper/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/staceyjf/nestMapper/issues
[license-shield]: https://img.shields.io/github/license/staceyjf/nestMapper.svg?style=for-the-badge
[license-url]: https://github.com/staceyjf/nestMapper/blob/master/LICENCE
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[Mermaid-shield]: https://img.shields.io/badge/Mermaid-007ACC?style=for-the-badge&logo=mermaid&logoColor=white
[Mermaid-url]: https://mermaid.js.org/intro/
