# Node.js Process and Environment Variables

## The `process` Object

Node.js provides a global `process` object that gives information about the current Node process and runtime environment.

Examples:

```js
console.log(process.version);
console.log(process.platform);
console.log(process.cwd());
```

## Environment Variables

Environment variables allow configuration to stay outside the source code.

They are accessed using:

```js
process.env
```

Example:

```js
console.log(process.env.APP_MODE);
```

## Why Environment Variables Matter

Backend applications often need different values depending on where they are running.

For example:

* development
* staging
* production

Values such as these should usually come from environment variables:

* database connection strings
* API keys
* ports
* application mode
* service URLs

## Default Values

A fallback value can be used:

```js
const port = process.env.PORT || 3000;
```

This means:

Use the `PORT` environment variable if it exists. Otherwise, use `3000`.

## What I Practiced

I used:

```js
process.version
process.platform
process.cwd()
process.env.APP_MODE
process.env.PORT
```

I also set environment variables in Windows Command Prompt using:

```bat
set APP_MODE=development
set PORT=5000
```

## Important Security Lesson

Secrets should not be hardcoded directly into source code.

Environment variables help keep configuration separate from application logic.
