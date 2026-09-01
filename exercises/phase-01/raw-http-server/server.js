const http = require("http");

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: "Backend Mastery API",
      }),
    );
  } else if (req.method === "GET" && req.url === "/health") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        status: "ok",
      }),
    );
  } else if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify([
        {
          id: 1,
          name: "Sagar",
        },
        {
          id: 2,
          name: "Sara",
        },
      ]),
    );
  } else {
    res.writeHead(404, {
      "Content-Type": "application/json",
    });

    res.end(
      JSON.stringify({
        error: "Route not found!",
      }),
    );
  }
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});