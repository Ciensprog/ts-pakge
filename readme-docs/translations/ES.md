# Ts Pakge

Plantilla simple para crear un paquete NPM con Typescript

## Empezando

Puedes leer este README en este idioma:

- [English](https://github.com/Ciensprog/ts-pakge)

### Instalación

Es preferible usar una versión estable de Node `>=12`.

Es posible generar un nuevo repositorio basado en este [Template](https://github.com/Ciensprog/ts-pakge/generate). De la misma manera [descargando](https://github.com/Ciensprog/ts-pakge/archive/master.zip) o clonando el repositorio:

```sh
git clone https://github.com/Ciensprog/ts-pakge.git
cd ts-pakge
npm install # Or npm i to install dependencies
```

### Configuración

La compilación es generada usando [Webpack](https://webpack.js.org/) con soporte para [Typescript](https://www.typescriptlang.org/).

Dispone de los siguientes comandos `npm run <command>`:

- `build`: Crea los archivos listos para producción en la carpeta `dist`.
- `start`: Inicie su entorno en modo de desarrollo, observando cualquier cambio dentro de la carpeta `src`.

### Estructura

- `dist`: Archivos compilados para su uso y posterior publicación en el registro de [**NPM**](https://www.npmjs.com/).
- `src`: Aquí es donde vive el código de tu paquete. Los alias creados se anotan en este directorio.

### Compilando archivos

_Webpack_ soporta la salida de un único archivo en su configuración por defecto. Para generar diferentes archivos en su ruta específica, puedes modificar el archivo `build.config.js`:

```javascript
// Archivos a ser compilados
const files = [
  {
    name: 'index',
    path: 'src/index.ts',
    // output: null, // Optional
  },
];

module.exports = { files };
```

- _`name`_ _string_ - Nombre del archivo final, por ejemplo: `dist/index.js`, con sus respectivas _declaraciones_ y _map_.
- _`path`_ _string_ - Ruta donde se ubica el archivo de entrada, ejemplo: `src/index.ts`.
- _`output`_ _string | false_ - (Opcional) De especificar el archivo se genera en esta ruta, puede ser un _string_ o un valor _nulo/falso_.

### Alias

Es posible configurar alias para la importación de los archivos (opcional). Para hacerlo edita el archivo `tsconfig.json` y agrega tu alias de la siguiente forma:

```javascript
// tsconfig.json
{
  //...
  "compilerOptions": {
    //...
    "paths": {
      "Module/*": ["modules/*"] // Alias Module
    }
  }
}

```

Tomando de base el archivo `sample.ts` ubicado dentro de la ruta `src/modules`:

```typescript
// src/modules/sample.ts
class Sample {
  // ...
}

export default Sample;
```

Podemos importar de la siguiente manera en nuestro archivo principal:

```typescript
// src/index.ts
import Sample from 'Module/Sample';
```

O si lo prefieres puedes seguir usando rutas relativas:

```typescript
// src/index.ts
import Sample from './modules/Sample';
```

---

#### TODO

- Agregar nuevas integraciones.
- ...

### Contribución

Eres libre de crear un [_Issue_](https://github.com/Ciensprog/ts-pakge/issues) sobre cualquier problema encontrado. De la misma manera puedes crear un [_Pull Request_](https://github.com/Ciensprog/ts-pakge/pulls) para añadir mejoras :D
