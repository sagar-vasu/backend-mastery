const http = require("http");
require("dotenv").config();

const PORT = process.env.PORT || 3000;

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    return sendJson(res, 200, {
      message: "Backend Mastery API",
    });
  }

  if (req.method === "GET" && req.url === "/health") {
    return sendJson(res, 200, {
      status: "ok",
    });
  }

  if (req.method === "GET" && req.url === "/users") {
    return sendJson(res, 200, [
      {
        id: 1,
        name: "Sagar",
      },
      {
        id: 2,
        name: "Sara",
      },
    ]);
  }

  return sendJson(res, 404, {
    error: "Route not found",
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
