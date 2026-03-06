# 🚀 Zox News Reverse Engineering with Nuxt.js & Vue

<div align="center">

[![GitHub stars](https://img.shields.io/github/stars/Vitor-Carmo/clone-zox-news-vue?style=for-the-badge)](https://github.com/Vitor-Carmo/clone-zox-news-vue/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/Vitor-Carmo/clone-zox-news-vue?style=for-the-badge)](https://github.com/Vitor-Carmo/clone-zox-news-vue/network)
[![GitHub issues](https://img.shields.io/github/issues/Vitor-Carmo/clone-zox-news-vue?style=for-the-badge)](https://github.com/Vitor-Carmo/clone-zox-news-vue/issues)
[![GitHub license](https://img.shields.io/github/license/Vitor-Carmo/clone-zox-news-vue?style=for-the-badge)](LICENSE) <!-- TODO: Add LICENSE file for proper badge -->

**A modern news portal clone built with Vue.js and Nuxt.js, showcasing dynamic content and responsive design.**

<!-- [Live Demo](https://zoxnews-vue-clone.netlify.app/)  TODO: Add live demo link after deployment -->

</div>

## 📖 Overview

This project is a reverse-engineered implementation of the **Zox News WordPress theme**, rebuilt using **Vue.js and Nuxt.js**.

Instead of relying on the traditional **PHP + WordPress stack**, the original layout and behavior were carefully analyzed and recreated using a **modern JavaScript frontend architecture**.

The goal of this project was to:

- Reproduce the visual structure of the Zox News theme
- Improve performance and flexibility using **Nuxt.js**
- Remove WordPress dependencies
- Allow easier customization and component reuse

This repository demonstrates skills in:

- Reverse engineering frontend layouts
- Converting PHP templates to Vue components
- Structuring scalable frontend architecture
- Building SEO-friendly applications with Nuxt.js


This repository represents the **initial version of the project**, which later evolved into a **real production news portal** used in a live environment. In later stages, the project received additional development including API integrations, dynamic content loading, and further customizations.

The commits containing those production implementations were intentionally removed, and this repository now serves as the **template/base architecture** that powered the final system.

## 🧠 Reverse Engineering Approach

The original Zox News template was built for **WordPress using PHP**.  
This project involved analyzing the template structure and recreating it with **Vue components and Nuxt.js pages**.

Key challenges included:

- Converting PHP template logic into Vue components
- Rebuilding layout structures using Nuxt layouts
- Recreating sliders and dynamic sections using Vue libraries
- Preserving the visual identity while modernizing the stack

The result is a **clean, component-based frontend architecture** independent of WordPress.


## ✨ Features

-   🎯 **Reverse Engineered Zox News Template:** Accurate clone of the popular Zox News design for a visually familiar experience.
-   📰 **Dynamic News Display:** Structured presentation of news articles, categories, and featured posts.
-   🎠 **Interactive Content Carousels:** Engaging sliders and carousels for showcasing trending news or image galleries, powered by Vue Awesome Swiper and Vue Carousel.
-   📱 **Fully Responsive Design:** Optimized for seamless viewing and interaction across various devices and screen sizes using SCSS media queries.
-   ⚡ **Progressive Web App (PWA) Capabilities:** Enhanced offline experience and installability through Nuxt.js PWA module.
-   💾 **Persistent State Management:** Efficient data handling and client-side state persistence using Vuex with `vuex-persistedstate`.
-   📝 **Robust Form Handling:** Client-side form validation with Vuelidate and input masking with Vue The Mask for improved user input.
-   🚀 **Server-Side Rendering (SSR) & Static Site Generation (SSG):** Benefits from Nuxt.js's universal mode for better SEO and initial load performance.
-   🧩 **Modular Component Architecture:** Reusable Vue components for maintainable and scalable UI development.

<!--
## 🖥️ Screenshots
-->
<!-- TODO: Add actual screenshots of the application, including desktop and mobile views. -->
<!--
![Desktop Screenshot 1](path-to-desktop-screenshot-1.png)
![Desktop Screenshot 2](path-to-desktop-screenshot-2.png)
![Mobile Screenshot](path-to-mobile-screenshot.png)
-->

## 🛠️ Tech Stack

**Frontend:**
[![Vue.js](https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D)](https://vuejs.org/)
[![Nuxt.js](https://img.shields.io/badge/Nuxt.js-003333?style=for-the-badge&logo=nuxtdotjs&logoColor=00DC82)](https://nuxtjs.org/)
[![SCSS](https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white)](https://sass-lang.com/)
[![Vuex](https://img.shields.io/badge/Vuex-4FC08D?style=for-the-badge&logo=vuex&logoColor=white)](https://vuex.vuejs.org/)
[![Axios](https://img.shields.io/badge/Axios-000000?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)
[![Moment.js](https://img.shields.io/badge/Moment.js-B22B1E?style=for-the-badge&logo=moment&logoColor=white)](https://momentjs.com/)
[![Vuelidate](https://img.shields.io/badge/Vuelidate-4FC08D?style=for-the-badge&logo=vuelidate&logoColor=white)](https://vuelidate.js.org/)
[![Vue Awesome Swiper](https://img.shields.io/badge/Swiper-6332F6?style=for-the-badge&logo=swiper&logoColor=white)](https://swiperjs.com/)

**DevOps & Tools:**
[![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)](https://nodejs.org/)
[![Yarn](https://img.shields.io/badge/Yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white)](https://yarnpkg.com/)
[![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)](https://eslint.org/)
[![Prettier](https://img.shields.io/badge/Prettier-F7BA3E?style=for-the-badge&logo=prettier&logoColor=white)](https://prettier.io/)

## 🚀 Quick Start

Follow these steps to get a development environment up and running.

### Prerequisites
Before you begin, ensure you have the following installed:
-   **Node.js**: `v18.16.0` (as specified in `.tool-versions`) or a compatible LTS version.
-   **Yarn**: Package manager for installing dependencies.

### Installation

1.  **Clone the repository**
    ```bash
    git clone https://github.com/Vitor-Carmo/clone-zox-news-vue.git
    cd clone-zox-news-vue
    ```

2.  **Install dependencies**
    ```bash
    yarn install
    ```

3.  **Start development server**
    ```bash
    yarn dev
    ```

4.  **Open your browser**
    Visit `http://localhost:3000` to see the application.

## 📁 Project Structure

```
clone-zox-news-vue/
├── .editorconfig         # Editor configuration settings
├── .gitignore            # Files and directories to be ignored by Git
├── .tool-versions        # asdf-vm configuration for language versions (Node.js)
├── assets/               # Uncompiled assets like SCSS, images, fonts
│   └── scss/             # Global SCSS styles and variables
├── components/           # Reusable Vue components
├── helper/               # Utility JavaScript functions or helpers
├── layouts/              # Vue layouts for consistent page structure (e.g., default.vue)
├── nuxt.config.js        # Nuxt.js framework configuration
├── package.json          # Project metadata and dependencies
├── pages/                # Application pages, define routes automatically
│   └── index.vue         # Main homepage component
├── static/               # Static assets served directly to the root (e.g., favicon.ico)
├── store/                # Vuex store modules for state management
├── yarn.lock             # Yarn dependency lock file
└── README.md             # This README file
```

## ⚙️ Configuration

### Environment Variables
This project uses `cross-env` to manage the `NODE_ENV` variable for development and production builds. No additional user-configurable environment variables (e.g., from a `.env` file) are explicitly detected or required for basic setup.

### Configuration Files
-   `nuxt.config.js`: The central configuration file for the Nuxt.js application, including modules, plugins, build settings, and PWA configurations.
-   `.editorconfig`: Ensures consistent coding styles across different editors.
-   `.tool-versions`: Specifies Node.js version using asdf-vm.

## 🔧 Development

### Available Scripts
The `package.json` file includes several useful scripts for development and building:

| Command         | Description                                                      |
|-----------------|------------------------------------------------------------------|
| `yarn dev`      | Starts the development server with hot-reload at `localhost:3000`. |
| `yarn build`    | Builds the application for production deployment (SSR/SPA).      |
| `yarn start`    | Starts the production server after building the application.     |
| `yarn generate` | Generates a static version of the application (SSG).             |
| `yarn lint`     | Lints `.js` and `.vue` files according to ESLint rules.         |
| `yarn precommit`| Runs linting before committing (requires `husky` or similar setup). |

### Development Workflow
To begin development, simply run `yarn dev`. This will launch the Nuxt.js development server, which automatically reloads the application upon code changes, providing a smooth development experience.

## 🚀 Deployment

### Production Build
To create a production-ready build for an SSR/SPA deployment:
```bash
yarn build
```
Then, to start the built application:
```bash
yarn start
```

### Static Site Generation (SSG)
To generate a static version of the application suitable for static hosting (e.g., Netlify, Vercel, GitHub Pages):
```bash
yarn generate
```
This command will create a `dist` directory containing all the necessary static files.

### Deployment Options
-   **Static Hosting (SSG):** The output from `yarn generate` can be deployed directly to services like Netlify, Vercel, or any web server.
-   **Node.js Server (SSR/SPA):** The output from `yarn build` can be deployed to a Node.js hosting environment (e.g., Heroku, AWS EC2, DigitalOcean) and run with `yarn start`.

## 🤝 Contributing

We welcome contributions! If you're interested in improving this project, please consider:
1.  Forking the repository.
2.  Creating a new branch (`git checkout -b feature/your-feature`).
3.  Making your changes.
4.  Ensuring your code passes linting (`yarn lint`).
5.  Committing your changes (`git commit -am 'feat: Add new feature'`).
6.  Pushing to the branch (`git push origin feature/your-feature`).
7.  Opening a Pull Request.

### Development Setup for Contributors
The development setup is identical to the Quick Start guide. Ensure you follow the linting rules enforced by ESLint.

## 📄 License

This project is currently **Unspecified**. Please consider adding a `LICENSE` file to clarify the terms of use.

## 🙏 Acknowledgments

-   [Nuxt.js](https://nuxtjs.org/) - The intuitive Vue framework.
-   [Vue.js](https://vuejs.org/) - The progressive JavaScript framework.
-   [Vue Awesome Swiper](https://github.com/surmon-china/vue-awesome-swiper) - Swiper component for Vue.
-   [Vue Carousel](https://ssense.github.io/vue-carousel/) - A flexible and responsive carousel component for Vue.
-   [Vuelidate](https://vuelidate.js.org/) - Simple, lightweight model-based validation for Vue.js.
-   [Zox News Theme](https://themeforest.net/item/zox-news-professional-wordpress-news-magazine-theme/19177119) - Inspiration for the design clone.

## 📞 Support & Contact

-   🐛 Issues: [GitHub Issues](https://github.com/Vitor-Carmo/clone-zox-news-vue/issues)

---

<div align="center">

**⭐ Star this repo if you find it helpful!**

Made with ❤️ by [Vitor-Carmo](https://github.com/Vitor-Carmo)

</div>
