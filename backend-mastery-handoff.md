# Backend Mastery — Learning Context & Handoff

## Learner Profile

I am a frontend developer with experience in:

- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Firebase
- API integration
- AI API integration

My goal is to become a backend architect who can design, build, deploy, and explain complete production-ready systems end to end.

---

# Learning Rules

Use this file as the context for continuing my backend learning in a new chat.

## Teaching Style

- Teach one phase at a time.
- Within a phase, teach one concept at a time unless I explicitly ask for the full A-to-Z lesson.
- Prefer hands-on exercises over long theory.
- I should write and run code myself.
- Ask me to predict outputs where useful.
- Review my code before I push important exercises.
- Do not skip raw fundamentals just because frameworks make them easier.
- Do not jump to Prisma before SQL.
- Explain backend concepts in terms of:
  - data integrity
  - contracts
  - failures
  - performance
  - security
  - maintainability
- Connect new backend concepts to my frontend knowledge when helpful.

---

# Git & GitHub Workflow

I am learning GitHub management alongside backend development.

For each lesson or topic:

1. Sync `main`

```bash
git checkout main
git pull
```

2. Create a feature/learning branch

Example:

```bash
git checkout -b phase-02/sql-basics
```

3. Complete the exercise and notes.

4. Check the working tree:

```bash
git status
```

5. Commit with meaningful Conventional Commit-style messages.

Examples:

```text
feat: add raw Node HTTP server
docs: learn Node event loop fundamentals
fix: return 404 for unknown routes
refactor: extract JSON response helper
chore: move notes to correct phase
test: add auth service tests
```

6. Push the branch:

```bash
git push -u origin <branch-name>
```

7. Create a Pull Request into `main`.

8. Review the `Files changed` tab before merging.

9. Merge the Pull Request.

10. Sync local `main` again:

```bash
git checkout main
git pull
git status
```

The goal is to practice the same branch → commit → PR → review → merge workflow used in real teams.

---

# Repository

Repository name:

```text
backend-mastery
```

Recommended structure:

```text
backend-mastery/
├── README.md
├── .gitignore
├── .env.example
├── package.json
├── package-lock.json
│
├── notes/
│   ├── phase-00-backend-mindset/
│   ├── phase-01-node/
│   ├── phase-02-sql-postgresql/
│   ├── phase-03-express-rest/
│   └── ...
│
├── exercises/
│   ├── phase-01/
│   ├── phase-02/
│   └── ...
│
├── projects/
│   ├── task-manager-api/
│   ├── ecommerce-or-social-platform/
│   └── ai-powered-saas/
│
└── progress/
    └── learning-log.md
```

Do not create every future file in advance. Add folders and files as the roadmap progresses.

---

# Progress

## Phase 0 — Backend Mindset ✅ COMPLETED

Covered:

- client-server model
- request/response lifecycle
- HTTP methods
- HTTP status codes
- HTTP headers
- JSON responses
- HTTP statelessness
- URL request lifecycle
- DNS → connection → HTTP → server → response
- basic understanding of HTTPS/TLS
- what a server actually is

Proof of learning:

- documented HTTP fundamentals
- documented URL request lifecycle
- built the first raw Node HTTP server

---

# Phase 1 — Node.js Core ✅ COMPLETED

Phase 1 was completed through hands-on exercises, notes, commits, branches, and Pull Requests.

## Topics Completed

### Node Runtime & Event Loop

Learned:

- Node.js executes JavaScript on the main JavaScript thread.
- synchronous code can block execution
- asynchronous callbacks run when the main thread becomes available
- Promise callbacks and timer callbacks have different scheduling behavior
- a timer delay is a minimum delay, not an exact execution guarantee

Exercises included:

```text
event-loop.js
blocking.js
```

Observed:

```text
1
4
3
2
```

for a Promise/timer scheduling experiment.

Also demonstrated how a 5-second synchronous loop delays a 1-second timer.

---

### CommonJS vs ES Modules

Learned CommonJS:

```js
const { add } = require("./math");

module.exports = {
  add,
};
```

Learned ES Modules:

```js
import { add } from "./math.mjs";

export function add(a, b) {
  return a + b;
}
```

Understood:

- CommonJS uses `require()` and `module.exports`
- ES Modules use `import` and `export`
- modern JavaScript/TypeScript projects commonly favor ES Modules
- CommonJS is still important for existing Node codebases

Exercises included:

```text
commonjs-math.js
commonjs-app.js
esm-math.mjs
esm-app.mjs
```

---

### Node `process`

Practiced:

```js
process.version
process.platform
process.cwd()
process.env
```

Learned how Node exposes runtime and environment information.

---

### Environment Variables

Practiced:

```js
process.env.APP_MODE
process.env.PORT
```

Used fallbacks such as:

```js
const port = process.env.PORT || 3000;
```

Learned why configuration should be separated from application logic.

---

### `dotenv`

Installed and used `dotenv`.

Practiced:

```js
require("dotenv").config();
```

Created:

```text
.env
.env.example
```

Important rule:

```text
.env must not be committed.
```

The `.env.example` file documents required environment variables without exposing secrets.

---

### `fs` and `path`

Practiced synchronous file-system operations:

```js
fs.writeFileSync()
fs.readFileSync()
```

Practiced path helpers:

```js
path.join()
path.basename()
path.extname()
path.dirname()
```

Learned why `path` should be preferred over manually joining path strings.

---

### Async File Operations

Used:

```js
const fs = require("fs/promises");
```

Practiced:

```js
await fs.writeFile()
await fs.readFile()
```

Learned the difference between synchronous I/O and Promise-based asynchronous I/O.

---

### Callbacks → Promises → async/await

Learned callbacks:

```js
getUser((user) => {
  console.log(user);
});
```

Learned Promises:

```js
getUser().then((user) => {
  console.log(user);
});
```

Learned async/await:

```js
const user = await getUser();
```

Learned Promise states:

- pending
- fulfilled
- rejected

Practiced rejected Promises with `try/catch`.

Important mental model:

```text
Callbacks
   ↓
Promises
   ↓
async/await
```

---

### Error Handling

Practiced:

```js
throw new Error("Something went wrong");
```

and:

```js
try {
  // work
} catch (error) {
  console.error(error.message);
}
```

Learned that backend operations must expect and handle failure.

---

### Process Exit Codes

Practiced:

```js
process.exit(1);
```

Learned the convention:

```text
0 = success
non-zero = failure
```

Understood why exit codes matter for:

- scripts
- CI/CD
- Docker
- deployments
- process managers

---

### npm & package.json

Learned important `package.json` fields:

- `name`
- `version`
- `scripts`
- `dependencies`
- `devDependencies`

Created npm scripts such as:

```json
{
  "scripts": {
    "start": "node exercises/phase-01/raw-http-server/server.js",
    "event-loop": "node exercises/phase-01/event-loop.js"
  }
}
```

Practiced:

```bash
npm start
npm run event-loop
```

---

### Semantic Versioning

Learned:

```text
MAJOR.MINOR.PATCH
```

Mental model:

```text
1.0.1 = patch / bug fix
1.1.0 = backward-compatible feature
2.0.0 = breaking change
```

---

### Dependencies vs DevDependencies

Learned:

```bash
npm install package-name
```

for runtime dependencies.

Learned:

```bash
npm install -D package-name
```

for development dependencies.

---

### Raw Node HTTP Server

Built a server using Node's built-in:

```js
require("http");
```

Implemented:

```text
GET /
GET /health
GET /users
404 fallback
```

Returned JSON responses with proper status codes and `Content-Type`.

Later refactored repeated response logic into:

```js
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}
```

Moved the server port to environment configuration:

```js
const PORT = process.env.PORT || 3000;
```

This completed the Phase 1 proof task: building a working JSON API with Node's raw HTTP module and no web framework.

---

# GitHub Skills Practiced During Phase 1

Alongside Node.js, practiced:

- local Git repositories
- `main` branch management
- renaming `master` to `main`
- remote tracking branches
- `git fetch`
- `git pull`
- `git status`
- `git branch`
- feature branches
- staging changes
- meaningful commits
- pushing branches
- Pull Requests
- reviewing `Files changed`
- merging PRs
- syncing local `main`
- moving mistakenly placed files
- recording file renames in Git
- `.gitignore`
- protecting `.env`

Example Phase 1 branches included:

```text
phase-01/node-event-loop
phase-01/modules
phase-01/process-env
phase-01/fs-path
phase-01/npm-package-json
phase-01/async-fs
phase-01/callbacks-promises
phase-01/finalize-node-core
```

---

# Current Status

```text
Phase 0 — Backend Mindset        ✅ Complete
Phase 1 — Node.js Core           ✅ Complete
Phase 2 — SQL & PostgreSQL       ▶ NEXT
Phase 3 — Express & REST         ⬜ Not started
Phase 4 — Prisma                 ⬜ Not started
Phase 5 — Authentication         ⬜ Not started
Phase 6 — Architecture           ⬜ Not started
Phase 7 — Caching                ⬜ Not started
Phase 8 — Queues                 ⬜ Not started
Phase 9 — Testing                ⬜ Not started
Phase 10 — Security              ⬜ Not started
Phase 11 — Docker & Deployment   ⬜ Not started
Phase 12 — System Design         ⬜ Not started
Phase 13 — Advanced Mastery      ⬜ Ongoing later
```

---

# Next Phase — Phase 2: SQL & PostgreSQL

Do not skip this phase and do not jump directly to Prisma.

## Learn

- PostgreSQL installation/setup
- databases vs schemas vs tables
- SQL data types
- `CREATE TABLE`
- primary keys
- foreign keys
- `NOT NULL`
- `UNIQUE`
- `CHECK`
- `INSERT`
- `SELECT`
- `WHERE`
- `ORDER BY`
- `LIMIT`
- `OFFSET`
- `UPDATE`
- `DELETE`
- `INNER JOIN`
- `LEFT JOIN`
- `RIGHT JOIN`
- `GROUP BY`
- `COUNT`
- `SUM`
- `AVG`
- subqueries
- `UNION`
- indexes
- `EXPLAIN ANALYZE`
- transactions
- `BEGIN`
- `COMMIT`
- `ROLLBACK`
- normalization basics: 1NF, 2NF, 3NF

## Phase 2 Proof Task

Design a schema with at least four related tables, for example:

```text
users
posts
comments
likes
```

Include at least one many-to-many relation through a join table.

Write at least 10 raw SQL queries including:

- multiple filters
- pagination
- at least two joins
- at least one aggregation
- at least one transaction-related exercise
- at least one query inspected with `EXPLAIN ANALYZE`

Only after raw SQL is comfortable should the roadmap continue to Express and Prisma.

---

# Capstone Roadmap

## Project 1 — Task Manager API

Phases 1–5.

Stack eventually:

- Node.js
- Express
- PostgreSQL
- Prisma
- Zod
- JWT authentication

Goal:

Understand the complete:

```text
request
→ validation
→ service
→ database
→ response
```

cycle.

---

## Project 2 — E-commerce or Social Platform

Phases 6–9.

Add:

- payments
- image uploads
- Redis
- WebSockets
- pagination
- search/filtering
- RBAC
- layered architecture
- testing

---

## Project 3 — AI-Powered SaaS

Phases 10–13.

Add:

- multi-tenancy
- subscriptions
- BullMQ
- AI background jobs
- streaming responses
- rate limiting
- Docker
- CI/CD
- deployment
- observability

---

# Important Instruction for a New Chat

When I provide this file in a new chat, continue from the **Current Status** section.

Do not restart Phase 0 or Phase 1 unless I explicitly ask for review.

The immediate next lesson is:

```text
Phase 2 — SQL & PostgreSQL
```

Teach it with the same workflow:

```text
learn
→ exercise
→ notes
→ Git branch
→ commit
→ push
→ Pull Request
→ review
→ merge
```

Keep the progression practical and repository-driven.
