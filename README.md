# Gatsby Typescript Jest Sass and Bootstrap starter

_Setup_

```bash
yarn # to install dependencies

yarn start # runs gatsby develop
```

_Test_

```bash
yarn test
```

_build_

```bash
yarn build

yarn serve
```

## Steps

### 1. Setup

-   `gatsby cli` installation
-   VSCode extensions
    -   Bracket pair coloriser
    -   Color Highlight
    -   ES7 React... snippets
    -   ESLint
    -   GraphQL
    -   Jest snippets
    -   prettier
    -   React extensions
    -   React hooks snippets
    -   vscode-styled-component
-   Prettier and ESLint
-   Typescript
-   Jest
-   Sass-node and bootstrap / flexbox-gridd
-   Husky

### 2. Pipeline

-   CircleCI (cloud) vs Jenkins (local with Docker)
-   SonarCloud (cloud) vs SonarQube (local with Docker)
    -   `name=SONAR_TOKEN` and `value=<SONAR_KEY>` must be set
    -   follow set up from Administration > Analysis Method > CircleCI 'Follow the tutorial'
    -   In order to run with Circle CI, Automatic Analysis must be turned off
