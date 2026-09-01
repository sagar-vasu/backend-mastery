# Phase 1 Final Node.js Core Notes

## Error Handling

JavaScript errors can be created using:

```js
throw new Error("Something went wrong");
```

Errors can be handled using:

```js
try {
  // code
} catch (error) {
  console.error(error.message);
}
```

Handling errors is important in backend development because many operations can fail.

Examples include:

* database queries
* file operations
* external API calls
* authentication
* Redis operations
* background jobs

## Process Exit Codes

A Node.js process can exit using:

```js
process.exit(code);
```

Common convention:

```text
0 = success
non-zero = failure
```

Exit codes are useful for:

* scripts
* CI/CD
* Docker
* deployment systems
* process managers

## dotenv

Environment variables can be loaded from a `.env` file using:

```js
require("dotenv").config();
```

Values can then be accessed using:

```js
process.env.PORT
process.env.APP_NAME
```

Secrets should not be hardcoded into source code.

The `.env` file should usually be ignored by Git.

A `.env.example` file can document which environment variables the project requires.

## Dependencies

Runtime dependencies are stored in:

```json
"dependencies": {}
```

Development-only tools are stored in:

```json
"devDependencies": {}
```

Runtime dependency installation:

```bash
npm install package-name
```

Development dependency installation:

```bash
npm install -D package-name
```

## Raw HTTP Server Refactor

I created a reusable helper:

```js
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}
```

This removed repeated response logic from every route.

I also moved the server port into an environment variable:

```js
const PORT = process.env.PORT || 3000;
```

## Phase 1 Main Lessons

During Phase 1 I learned:

* how Node.js runs JavaScript
* event loop fundamentals
* synchronous vs asynchronous behavior
* blocking code
* callbacks
* Promises
* async/await
* CommonJS
* ES Modules
* `process`
* environment variables
* `dotenv`
* `fs`
* `path`
* npm scripts
* `package.json`
* semantic versioning
* error handling
* process exit codes
* raw HTTP server fundamentals

## Important Backend Mental Model

Node.js is a runtime that can execute JavaScript outside the browser.

A Node backend is a long-running process that can listen for incoming network requests.

Synchronous blocking work can prevent the Node process from handling other JavaScript work efficiently.

Many backend operations are asynchronous and are commonly handled using Promises and async/await.

Express will later make HTTP routing and middleware easier, but the underlying server is still built on Node.js concepts.
