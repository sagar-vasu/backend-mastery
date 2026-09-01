# URL Request Lifecycle

## What Happens When I Open a URL?

For example:

```text
http://localhost:3000/users
```

The basic flow is:

1. The client determines which server it needs to contact.
2. For a domain name, DNS resolves the domain into an IP address.
3. A network connection is established with the server.
4. The client sends an HTTP request.
5. The Node.js server receives the request.
6. The server checks the request method and URL.
7. The server runs the required application logic.
8. The server creates an HTTP response.
9. The response is sent back to the client.
10. The client processes the response.

For HTTPS, TLS is also used to secure the connection.

A simplified flow is:

```text
Client
  ↓
DNS
  ↓
TCP / network connection
  ↓
TLS for HTTPS
  ↓
HTTP Request
  ↓
Server
  ↓
Application Logic
  ↓
HTTP Response
  ↓
Client
```

## What Happened in My Node Exercise?

When I visited:

```text
http://localhost:3000/users
```

the browser sent an HTTP GET request.

My Node server checked:

```js
req.method === "GET"
req.url === "/users"
```

The server then returned a JSON array with a `200` status code.

If the URL did not match one of my routes, the server returned a `404` response.

## Important Realization

Express is not the server itself.

Node.js can already create an HTTP server.

Express will later provide easier abstractions for things such as routing, middleware, request handling, and responses.
