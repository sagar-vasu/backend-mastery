# HTTP & Client/Server Model

## Client/Server Model

A React application is a **client**. It sends HTTP requests to a backend server, and the server processes the request and returns a response.

```text
React Client
    ↓
HTTP Request
    ↓
Backend Server
    ↓
Database
    ↓
Backend Server
    ↓
HTTP Response
    ↓
React Client
```

The backend is responsible for:

* Validating requests
* Authentication
* Authorization
* Business logic
* Database operations
* Error handling
* Returning the correct HTTP status

## HTTP Request

An HTTP request contains:

* **Method** — GET, POST, PUT, PATCH, DELETE
* **Path** — e.g. `/api/users/42`
* **Headers** — authentication and other metadata
* **Body** — data sent to the server, usually for POST/PUT/PATCH

Example:

```http
GET /api/users/42
Authorization: Bearer abc123
Accept: application/json
```

## HTTP Methods

| Method | Purpose               |
| ------ | --------------------- |
| GET    | Read data             |
| POST   | Create data           |
| PUT    | Replace data          |
| PATCH  | Partially update data |
| DELETE | Remove data           |

## Important Status Codes

```text
200 = Success
201 = Created
204 = Success with no content

400 = Bad Request
401 = Not authenticated
403 = Not authorized
404 = Not Found
409 = Conflict
422 = Validation error
500 = Server error
```

### Key Difference

```text
401 = Who are you?
403 = I know who you are, but you're not allowed.
```

## Key Takeaway

**Client requests → Server validates and processes → Database provides data → Server responds → Client updates the UI.**
