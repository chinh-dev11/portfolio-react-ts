# Project

- [Contentful](https://www.contentful.com/) (Headless CMS)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com) (CI/CD) / Hosting at [Chinh Portfolio](https://chinh.ca)
- [Github](https://github.com/chinh-dev11/portfolio-react-ts)

### Tailwind CSS
[Installation using PostCSS](https://tailwindcss.com/docs/installation/using-postcss)
```
$ yarn add -D tailwindcss postcss autoprefixer
$ npx tailwindcss init # create tailwind.config.js

# tailwindcss.config.js
...
export default {
  content: ["./index.html","./src/**/*.{vue,js,jsx,ts,tsx}"],
  ...
}

# postcss.config.js
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}

# style.css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
