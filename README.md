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

## Typescript in Vue components

### components/User.vue

This is a `Vue.extend({})` syntax and in my opinion provides a bit better Typescript safety-net.

It also comes from the well-known Options API.

### components/User2.vue

This is a class-based component with annotations and native getter class methods.

However, the big limitation is that when declaring a class variable for mutating state (OptionAPI `data() { ... }`), you always have to initialize it with some value. You cannot leave it uninitialized and also you can't assign `undefined` as initialization value, because it will NOT be reactive (Vue will not work as expected).

Also, if you want to initialize your state based on props, you have to use the `data() { ... }` function anyway.
