# Node.js `fs` and `path`

## `fs` Module

The `fs` module lets Node.js work with the file system.

I used:

```js
fs.writeFileSync()
```

to create and write to a file.

I used:

```js
fs.readFileSync()
```

to read a file.

Example:

```js
const fs = require("fs");

fs.writeFileSync(
  "exercises/phase-01/message.txt",
  "Hello from Node.js fs module!"
);
```

Reading the file:

```js
const content = fs.readFileSync(
  "exercises/phase-01/message.txt",
  "utf8"
);

console.log(content);
```

## `path` Module

The `path` module helps build and inspect file paths safely.

Example:

```js
const path = require("path");

const filePath = path.join(
  "exercises",
  "phase-01",
  "message.txt"
);
```

Useful methods I practiced:

```js
path.join()
path.basename()
path.extname()
path.dirname()
```

## Why This Matters

Backend applications often need to:

* read configuration files
* save uploaded files
* generate files
* work with logs
* resolve directories
* access local resources

Using `path` is safer than manually joining folder names with `/` or `\`.

## Important Note

The synchronous methods:

```js
fs.writeFileSync()
fs.readFileSync()
```

block the main JavaScript thread while the operation runs.

They are useful for small scripts and learning, but backend servers often prefer asynchronous file-system methods for request-handling code.
