# HTTP Fundamentals

## What is HTTP?

HTTP is the protocol used by clients and servers to communicate.

A client sends a request, and the server sends back a response.

In my first backend exercise, the browser acted as the client and my Node.js server handled the request.

## Client and Server

The client sends a request such as:

GET /users

The server receives that request, checks the HTTP method and URL, then decides what response to return.

## HTTP Request

A request can contain:

* HTTP method
* URL or path
* headers
* optional body

Common methods:

* GET — retrieve data
* POST — create data
* PUT — replace data
* PATCH — update part of existing data
* DELETE — remove data

## HTTP Response

A response can contain:

* status code
* headers
* response body

In my Node.js server, I returned JSON responses using:

```js
res.end(JSON.stringify(data));
```

I also used the `Content-Type` header:

```js
res.writeHead(200, {
  "Content-Type": "application/json",
});
```

This tells the client that the response body contains JSON.

## Status Codes I Used

### 200 OK

Used when a request succeeds.

Examples:

* GET /
* GET /health
* GET /users

### 404 Not Found

Used when the requested route does not exist.

Example response:

```json
{
  "error": "Route not found!"
}
```

## What I Learned From the Exercise

A Node.js backend can listen for HTTP requests without using Express.

The `http.createServer()` function receives a request object and a response object.

The request object contains information such as:

```js
req.method
req.url
```

The response object is used to send the status, headers, and response body.

I also learned that `res.end()` finishes the response. After calling it, I should not try to send another response for the same request.
