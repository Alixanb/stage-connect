# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ["./tsconfig.node.json", "./tsconfig.app.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from "eslint-plugin-react";

export default tseslint.config({
  // Set the react version
  settings: { react: { version: "18.3" } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs["jsx-runtime"].rules,
  },
});
```

# Stage Connect

Stage Connect est un projet étudiant réalisé dans le cadre du cursus Ynov Campus.

## Description

L'objectif de ce projet est de concevoir une **salle de concert virtuelle** accessible en ligne. Les utilisateurs peuvent découvrir des expériences immersives autour de la musique, explorer des artistes, des événements et interagir dans un environnement numérique dédié à la scène musicale.

Le projet est développé avec **React**, **TypeScript**, **Vite** et **ThreeJS** pour garantir performance et modernité. Il met l'accent sur l'expérience utilisateur, l'accessibilité et l'innovation dans la découverte musicale.

## Fonctionnalités principales

- Présentation d'artistes et d'événements
- Expérience utilisateur fluide grâce à des animations et une interface moderne
- Salle de concert virtuelle interactive

## Technologies utilisées

- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lenis](https://github.com/studio-freight/lenis)
- [Three.js](https://threejs.org/)

## Installation

1. **Cloner le dépôt :**

   ```bash
   git clone https://github.com/votre-utilisateur/stage-connect.git
   cd stage-connect
   ```

2. **Installer les dépendances :**

   ```bash
   npm install
   ```

3. **Lancer le projet en développement :**
   ```bash
   npm run dev
   ```

## Auteurs

Projet réalisé par des étudiants de **Ynov Campus**.

---

© 2025 Stage Connect – Projet étudiant Ynov Campus
