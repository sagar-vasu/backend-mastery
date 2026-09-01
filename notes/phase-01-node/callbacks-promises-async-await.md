# Callbacks, Promises, and async/await

## Callbacks

A callback is a function passed into another function so it can be executed later.

Example:

```js
function getUser(callback) {
  setTimeout(() => {
    callback({
      id: 1,
      name: "Sagar",
    });
  }, 1000);
}
```

Usage:

```js
getUser((user) => {
  console.log(user);
});
```

Callbacks are common in older Node.js code.

## Promises

A Promise represents a value that may become available in the future.

A Promise can be:

* pending
* fulfilled
* rejected

Example:

```js
function getUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 1,
        name: "Sagar",
      });
    }, 1000);
  });
}
```

Usage:

```js
getUser().then((user) => {
  console.log(user);
});
```

## async/await

`async/await` is built on top of Promises.

It makes asynchronous code easier to read.

Example:

```js
async function run() {
  const user = await getUser();

  console.log(user);
}
```

`await` pauses execution inside the current async function until the Promise settles.

It does not block the entire Node.js process.

## Promise Rejection

Promises can fail using `reject()`.

Example:

```js
reject(new Error("Failed to load user"));
```

With async/await, rejected Promises can be handled using `try/catch`:

```js
async function run() {
  try {
    const user = await getUser();

    console.log(user);
  } catch (error) {
    console.error(error.message);
  }
}
```

## Evolution

A useful mental model is:

```text
Callbacks
   ↓
Promises
   ↓
async/await
```

They can all represent asynchronous work, but modern Node.js code commonly favors Promises and async/await because they are easier to compose and read.

## Backend Importance

I will use this pattern later with:

* database queries
* Prisma
* Redis
* external APIs
* AI APIs
* file operations
* queues
* authentication services

## What I Learned

Callbacks provide results through another function.

Promises represent a future result.

`async/await` gives Promise-based code a synchronous-looking structure while the operation remains asynchronous.

Rejected Promises should be handled so failures do not crash or silently break application logic.
