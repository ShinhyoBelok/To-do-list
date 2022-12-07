<a name="readme-top"></a>

<!--
HOW TO USE:
This is an example of how you may give instructions on setting up your project locally.

Modify this file to match your project and remove sections that don't apply.

REQUIRED SECTIONS:
- Table of Contents
- About the Project
  - Built With
  - Live Demo
- Getting Started
- Authors
- Future Features
- Contributing
- Show your support
- Acknowledgements
- License

After you're finished please remove all the comments and instructions!
-->

<div align="center">

  <!-- <img src="./readmeFiles/murple_logo.png" alt="logo" width="140"  height="auto" />
  <br/> -->

  <h3><b>Microverse README</b></h3>

</div>

<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [📝 License](#license)

<!-- PROJECT DESCRIPTION -->

# 📖 To do taks <a name="about-project"></a>

**To do taks** is a website that allows you to create a collection of your favorites books.

## 🛠 Built With <a name="built-with"></a>

- HTML and JavaScript
- Git, Github and Visual Studio Code
- Webpack

<!-- Features -->

### Key Features <a name="key-features"></a>

- **Add_and_romeve_books**
- **Localstorage**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

[You can see our live demo](https://shinhyobelok.github.io/To-do-list/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running follow these simple example steps.

### Prerequisites

In order to run this project you need:

- Install Github
- Install VisualStudio Code

### Setup

Clone this repository to your desired folder:

- Choose a local directory.
- Open a Git Terminal.
- write: git clone https://github.com/ShinhyoBelok/To-do-list.git
- Open the repository with VS Code.

### Usage

To run the project, execute the following command:

- Go to the dist forlder.
- Open index.html.
- Run in a browser or with liveServer Extension.

## Install

In order to modificate the project you have to install webpack and css loader:

- npm init -y
- npm install webpack webpack-cli --save-dev
- npm install --save-dev html-webpack-plugin
- npm install --save-dev style-loader css-loader

[Optional] To make it easy to work with the code.
- npm install --save-dev webpack-dev-server
- create webpack.config.js in the root with the following code:
`
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  entry: {
    bundle: path.resolve(__dirname, 'src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    clean: true,
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/template.html',
    }),
  ],
}
`
### Deployment

You can deploy this project using:

[Deploy](https://shinhyobelok.github.io/To-do-list/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Shinhyo**

- GitHub: [@ShinhyoBelok](https://github.com/ShinhyoBelok)
- Twitter: [@Bell_iraki](https://twitter.com/Bell_iraki)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/shinhyo-belliard-okazaki-807a38249/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Cool_animation**
- [ ] **Change_color_theme**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/M1rn4/Set-up-adn-mobile-first/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>

Give a ⭐️ if you like this project!

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGEMENTS -->

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FAQ (optional) -->

## ❓ FAQ <a name="faq"></a>

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._

<p align="right">(<a href="#readme-top">back to top</a>)</p>
