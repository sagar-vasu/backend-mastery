# Async File Operations, Promises, and async/await

## Synchronous File Operations

Earlier I used synchronous file-system methods:

```js
fs.writeFileSync()
fs.readFileSync()
```

Synchronous operations block JavaScript execution until they finish.

This can be problematic inside backend request handling because slow operations can delay other work.

## Promise-Based File Operations

Node provides Promise-based file-system APIs:

```js
const fs = require("fs/promises");
```

I can then use:

```js
await fs.writeFile(...)
await fs.readFile(...)
```

## async/await

`await` can be used inside an `async` function.

Example:

```js
async function run() {
  const content = await fs.readFile("file.txt", "utf8");

  console.log(content);
}
```

The file operation completes asynchronously.

When the Promise resolves, execution inside the async function continues.

## Error Handling

Asynchronous operations can fail.

I can handle rejected Promises using `try/catch`:

```js
async function run() {
  try {
    const content = await fs.readFile(
      "file.txt",
      "utf8",
    );

    console.log(content);
  } catch (error) {
    console.error(error.message);
  }
}
```

## Important Backend Lesson

Many backend operations are asynchronous:

* database queries
* network requests
* file operations
* Redis operations
* API calls
* queue operations
* AI requests

Understanding Promises and async/await is therefore essential for Node.js backend development.

## Sync vs Async

Synchronous:

```js
fs.readFileSync(...)
```

Async Promise-based:

```js
await fs.readFile(...)
```

For normal backend request-handling code, asynchronous APIs are usually preferred when performing I/O.
