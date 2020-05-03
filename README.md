# Ts Pakge

Simple template to create an NPM package with Typescript

## Getting Started

You can read this README in this language:

- [Español](https://github.com/Ciensprog/ts-pakge/tree/master/readme-docs/translations/ES.md)

### Installation

It is preferable to use a stable version of Node `>=12`.

It is possible to generate a new repository based on this [Template](https://github.com/Ciensprog/ts-pakge/generate). In the same way [downloading](https://github.com/Ciensprog/ts-pakge/archive/master.zip) or cloning the repository:

```sh
git clone https://github.com/Ciensprog/ts-pakge.git
cd ts-pakge
npm install # Or npm i to install dependencies
```

### Configuration

The compilation is generated using [Webpack](https://webpack.js.org/) with support for [Typescript](https://www.typescriptlang.org/).

It has the following commands `npm run <command>`:

- `build`: Create the production-ready files in the folder `dist`.
- `start`: Start your environment in development mode, noting any changes inside the folder `src`.

### Structure

- `dist`: Files compiled for use and subsequent publication in the registry of [**NPM**](https://www.npmjs.com/).
- `src`: This is where your package code lives. The _aliases_ created are noted in this directory.

### Compiling files

_Webpack_ supports output of a single file in its default configuration. To generate different files in your specific path, you can modify the file `build.config.js`:

```javascript
// Files to be compiled
const files = [
  {
    name: 'index',
    path: 'src/index.ts',
    // output: null, // Optional
  },
];

module.exports = { files };
```

- _`name`_ _string_ - Name of the final file, for example: `dist/index.js`, with their respective _declarations_ and _maps_.
- _`path`_ _string_ - Path where the input file is located, example: `src/index.ts`.
- _`output`_ _string | false_ - (Optional) If specified the file is generated in this path, it can be a _string_ or a value _null/false_.

### Aliases

Aliases can be configured to import files (optional). To do this, edit the `tsconfig.json` file and add your alias as follows:

```javascript
// tsconfig.json
{
  //...
  "compilerOptions": {
    //...
    "paths": {
      "Module/*": ["modules/*"] // Alias
    }
  }
}

```

Based on the `sample.ts` file located inside the `src/modules` path:

```typescript
// src/modules/sample.ts
class Sample {
  // ...
}

export default Sample;
```

We can import as follows in our main file:

```typescript
// src/index.ts
import Sample from 'Module/Sample';
```

Or if you prefer you can continue using relative routes:

```typescript
// src/index.ts
import Sample from './modules/Sample';
```

---

#### TODO

- Add new integrations.
- ...

### Contribution

You are free to create an [_Issue_](https://github.com/Ciensprog/ts-pakge/issues) about any problems found. In the same way you can create a [_Pull Request_](https://github.com/Ciensprog/ts-pakge/pulls) to add improvements :D
