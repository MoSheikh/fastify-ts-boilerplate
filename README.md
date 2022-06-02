# fastify-ts-boilerplate

Boilerplate for HTTP REST applications powered by Fastify, using TypeScript and Node.

### Features

- Fastify installed with a health check endpoint included
- Jest + Supertest endpoint testing setup for TypeScript
- ESLint + Prettier + Husky + Lint-Staged setup for git workflows that ensure consistent styling

### Getting Started

#### Clone the project:

```shell
git clone https://github.com/MoSheikh/fastify-ts-boilerplate.git <new_project>
cd <new_project>
npm i
```

Start at the parent directory of the project you want to create and clone the git project.

#### Start the dev server using:

```shell
npm run dev
```

This executes the command `tsc -w & nodemon build` to watch for changes to TypeScript files to recompile and execute the new files.
