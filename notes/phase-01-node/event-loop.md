# Node.js Event Loop

## What I Learned

Node.js executes JavaScript on a main thread.

Synchronous code runs immediately and can block the main thread.

Asynchronous callbacks wait until the main thread is available.

## Event Loop Example

```js
console.log("1");

setTimeout(() => {
  console.log("2");
}, 0);

Promise.resolve().then(() => {
  console.log("3");
});

console.log("4");
```

Output:

```text
1
4
3
2
```

The synchronous code runs first.

Promise callbacks run after the current synchronous work finishes.

Timer callbacks run afterward.

## Blocking Example

```js
console.log("start");

setTimeout(() => {
  console.log("timer finished");
}, 1000);

const start = Date.now();

while (Date.now() - start < 5000) {
  // block for 5 seconds
}

console.log("end");
```

Output:

```text
start
end
timer finished
```

The timer was scheduled for 1 second, but the callback could not run because the main thread was blocked for 5 seconds.

## Important Backend Lesson

A timer delay is not a guarantee that the callback runs at that exact time.

The callback runs only when the event loop can process it.

Blocking the main thread can delay other work and hurt backend performance.
