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
-   Prettier and ESLint
-   Typescript
-   Jest
-   Sass-node and bootstrap / flexbox-gridd

### 2. Pipeline

-   CircleCI (cloud) vs Jenkins (local with Docker)
-   SonarCloud (cloud) vs SonarQube (local with Docker)
    -   `name=SONAR_TOKEN` and `value=<SONAR_KEY>` must be set
    -   follow set up from Administration > Analysis Method > CircleCI 'Follow the tutorial'
    -   in CircleCI project page, find Project Settings > Environment Variables and copy past the name and value
