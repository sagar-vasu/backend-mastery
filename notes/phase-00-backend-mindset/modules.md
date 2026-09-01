# CommonJS vs ES Modules

## CommonJS

CommonJS is the older Node.js module system.

It imports values using:

```js
const { add } = require("./math");
```

It exports values using:

```js
module.exports = {
  add,
};
```

## ES Modules

ES Modules use the standard JavaScript `import` and `export` syntax.

Example export:

```js
export function add(a, b) {
  return a + b;
}
```

Example import:

```js
import { add } from "./math.mjs";
```

## Main Difference

CommonJS:

```text
require()
module.exports
```

ES Modules:

```text
import
export
```

## What I Learned

Both systems allow code to be split across multiple files and reused.

ES Modules use JavaScript's standard module syntax and are common in modern JavaScript and TypeScript projects.

CommonJS is still important because many existing Node.js projects and packages use it.

## Exercise

I created both:

- a CommonJS math module
- an ES Module math module

Both exported `add` and `subtract` functions and imported them into another file.
