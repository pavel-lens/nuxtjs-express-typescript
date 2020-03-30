# nuxtjs-express-typescript

> Nuxt.js

- Components with Typescript
- Express server with Typescript

## Recommended VScode extensions

- Javascript support installed
- Vetur extension
- vue syntax highlighting
- prettier with "Format on Save" option

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Tests

Running frontend and backend tests are separated with following scripts.

```bash
# run frontend tests
$ npm run test:client
# run frontend tests in watch mode
$ npm run test:client:watch

# run backend tests
$ npm run test:server
# run backend tests in watch mode
$ npm run test:server:watch
```

## Docker

Build docker image from current directory.

```bash
$ docker build -t nuxt_typescript_app .
```

Now run the docker image and expose local port `3000`.

```bash
$ docker run -it -p 3000:3000 nuxt_typescript_app
```

The application should be accessible at `http://0.0.0.0:3000`

Try to reach baceknd API at `http://0.0.0.0:3000/api/users/`

## Typescript in Vue components

### components/User.vue

This is a `Vue.extend({})` syntax and in my opinion provides a bit better Typescript safety-net.

It also comes from the well-known Options API.

### components/User2.vue

This is a class-based component with annotations and native getter class methods.

However, the big limitation is that when declaring a class variable for mutating state (OptionAPI `data() { ... }`), you always have to initialize it with some value. You cannot leave it uninitialized and also you can't assign `undefined` as initialization value, because it will NOT be reactive (Vue will not work as expected).

Also, if you want to initialize your state based on props, you have to use the `data() { ... }` function anyway.

## How Typescript is compiled and how app is served in production

To understand how things work in production, we have to look at two components of the app:

- NuxtJS part
- ExpressJS backend API

### NuxtJS

NuxtJS is compiled into `.nuxt/dist/` directory which contains `client/` and `server/` directory.

In the `client/` directory, you will find Javascript bundles compiled by Webpack, separated into several chunks. You will also find statics assets like `fonts/`.

The `server` directory contains a `server.js` file which basically handles serving of static files and other Nuxt-related middleware functions. This is wired by `app.use(nuxt.render)` in original `<root>server/index.ts` file.

### ExpressJS backend API

The Express API implemented in `<root>/server/` directory is compiled by Typescript compiler and saved into `<root>/server-dist/` folder.

If you look at `start` script in `package.json` file, you will see the following `node server-dist/index.js`.

That means that in production, there is a `node` server running a compiled version of original `server/index.ts`, but now it's compiled to `server-dist/index.js`.
