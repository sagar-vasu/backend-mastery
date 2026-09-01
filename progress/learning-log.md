# Backend Learning Log

## 2026-09-01

### Phase

Phase 0 — Backend Mindset

### Studied

- Client-server model
- HTTP request and response lifecycle
- HTTP methods
- HTTP status codes
- JSON responses
- Basic HTTP headers
- Node.js HTTP server

### Built

A raw Node.js HTTP server without Express.

Implemented:

- `GET /`
- `GET /health`
- `GET /users`
- `404` handling for unknown routes

### What I Learned

A backend server is a long-running process that listens for incoming requests.

In Node.js, I can create a server using:

```js
http.createServer();
```

I can inspect incoming requests using:

```js
req.method;
req.url;
```

I can send responses using:

```js
res.writeHead();
res.end();
```

I also learned that `res.end()` completes the response, so I should not call it again for the same request.

### Mistake I Made

Initially, I called `res.end()` inside my routes and then called it again after the routing logic.

I learned that once the response has ended, Node cannot send another response for that request.

I also initially set response headers before deciding which route was being handled. I moved the status code and headers into each route so every response controls its own status and content type.

### Next

- Node.js runtime
- Event loop
- synchronous vs asynchronous execution
- CommonJS vs ES Modules
- `process`
- environment variables
## Phase 1 — Node.js Core Complete

### Completed

* Node.js runtime fundamentals
* Event loop
* Blocking vs non-blocking behavior
* Callbacks
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
* package.json
* semantic versioning
* error handling
* exit codes
* raw Node.js HTTP server

### Final Exercise

Refactored the raw HTTP server to:

* use environment-based configuration
* use reusable JSON response handling
* support multiple routes
* return appropriate HTTP status codes
* keep configuration outside application logic

### What I Can Explain Now

I can explain:

* what a Node.js process is
* why blocking JavaScript is dangerous on a backend
* how asynchronous work behaves
* callbacks vs Promises vs async/await
* CommonJS vs ES Modules
* how environment variables work
* why `.env` should not be committed
* how Node reads and writes files
* what package.json does
* what npm scripts do
* what semantic versioning means
* how a raw Node HTTP server handles requests and responses

### Next Phase

Phase 2 — SQL and PostgreSQL
