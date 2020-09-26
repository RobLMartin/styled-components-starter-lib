# Starter Library

This is a starter library for styled-components, the only peer-dependency is **styled-components@^5.2.0**. There are no dependencies. Make all components with the styled-components library. It's ready to be bundled and deployed as a node module and this is where you begin.

    1. Dist Folder
    2. Gallery Folder
    3. Src Folder

## 1. Dist Folder

This is the node_module, we wont be publishing until we finish our components. Instead use `npm link dist/core` to publish the bundle locally. Snag the first link from the terminal.

> You now have a local version of your module.

_Publish when ready._

## 2. Gallery Folder

This is an example react app with **styled-components@5.2.0**.

> Remove my module of course and install all dependencies.

Next, `npm i "./link/to/node/module/locally/my-lib"` in the `/gallery` folder.

Run `npm link my-lib` to listen to changes on the `./src` folder.

> When a change is made, react will know and update the example project in the `./gallery` folder.

## 3. Src Folder

This is where you create your components, no extra work needed. Just know how to create styled components and export them. Import them into the `./src/core/index.js` and add them to the named exports:

```JavaScript
  import ComponentA from './component.a';
  import ComponentB from './component.b';

  export { ComponentA, ComponentB }
```

Run `npm run dev` to listen to changes and automatically deploy locally, informing the hot-reload on your react app.

> Don't publish your node modules before testing them in isolation. Make sure your code is ready to be published. Its for this reason I made this boilerplate.

rlm.dev
