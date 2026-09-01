# Backend Mastery

A structured journey from frontend development to backend architecture.

This repository documents both my **backend engineering progress** and my **Git/GitHub workflow practice**.

## Background

Current frontend experience:

- React
- TypeScript
- Redux Toolkit
- Tailwind CSS
- Firebase
- API integration
- AI API integration

Goal:

> Become capable of designing, building, deploying, and explaining complete production-ready full-stack systems.

---

## Current Progress

| Phase | Topic | Status |
|---|---|---|
| 0 | Backend Mindset & HTTP | ✅ Complete |
| 1 | Node.js Core | ✅ Complete |
| 2 | SQL & PostgreSQL | ▶ Next |
| 3 | Express & REST API Design | ⬜ Not started |
| 4 | Prisma ORM | ⬜ Not started |
| 5 | Authentication & Authorization | ⬜ Not started |
| 6 | Backend Architecture | ⬜ Not started |
| 7 | Caching & Performance | ⬜ Not started |
| 8 | Background Jobs & Queues | ⬜ Not started |
| 9 | Testing | ⬜ Not started |
| 10 | Security | ⬜ Not started |
| 11 | Docker & Deployment | ⬜ Not started |
| 12 | System Design | ⬜ Not started |
| 13 | Advanced / Ongoing Mastery | ⬜ Later |

---

# Completed Work

## Phase 0 — Backend Mindset

Learned:

- client-server architecture
- HTTP request/response lifecycle
- HTTP methods
- HTTP status codes
- headers
- JSON responses
- stateless HTTP
- URL request lifecycle
- basic DNS, connection, TLS, and HTTP flow

Created documentation for:

```text
notes/phase-00-backend-mindset/
```

Built the first raw Node.js HTTP server.

---

## Phase 1 — Node.js Core ✅

Phase 1 was completed through practical exercises rather than framework abstractions.

### Node Runtime & Event Loop

Practiced:

- synchronous execution
- asynchronous execution
- event loop fundamentals
- Promise scheduling
- timer scheduling
- blocking JavaScript

Exercises:

```text
event-loop.js
blocking.js
```

### Modules

Practiced both:

```text
CommonJS
ES Modules
```

CommonJS:

```js
const { add } = require("./math");
```

ES Modules:

```js
import { add } from "./math.mjs";
```

### Process & Environment

Practiced:

```js
process.version
process.platform
process.cwd()
process.env
```

Used environment-based configuration such as:

```js
const PORT = process.env.PORT || 3000;
```

### File System

Practiced:

```js
fs.writeFileSync()
fs.readFileSync()
```

and Promise-based:

```js
await fs.writeFile()
await fs.readFile()
```

### Path Handling

Practiced:

```js
path.join()
path.basename()
path.extname()
path.dirname()
```

### Async JavaScript

Practiced the progression:

```text
Callbacks
   ↓
Promises
   ↓
async/await
```

Also practiced Promise rejection and `try/catch`.

### Error Handling

Practiced:

```js
throw new Error(...)
```

and:

```js
try {
  // work
} catch (error) {
  // handle failure
}
```

### Process Exit Codes

Learned:

```text
0 = success
non-zero = failure
```

and practiced:

```js
process.exit(1);
```

### npm & package.json

Learned:

- npm scripts
- package metadata
- runtime dependencies
- development dependencies
- semantic versioning

Practiced:

```bash
npm start
npm run event-loop
```

### Environment Security

Used:

```text
.env
.env.example
.gitignore
```

Important repository rule:

> Real `.env` files and secrets must never be committed.

### Raw HTTP Server

Built a Node server without Express.

Implemented:

```text
GET /
GET /health
GET /users
404 fallback
```

Refactored JSON responses into a reusable helper:

```js
function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    "Content-Type": "application/json",
  });

  res.end(JSON.stringify(data));
}
```

This completed the Phase 1 proof task.

---

# Repository Structure

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
│   │   ├── http.md
│   │   └── url-request-lifecycle.md
│   │
│   ├── phase-01-node/
│   │   ├── event-loop.md
│   │   ├── modules.md
│   │   ├── process-env.md
│   │   ├── fs-path.md
│   │   ├── npm-package-json.md
│   │   ├── async-await.md
│   │   ├── callbacks-promises-async-await.md
│   │   └── final-node-core.md
│   │
│   └── phase-02-sql-postgresql/
│
├── exercises/
│   ├── phase-01/
│   │   ├── raw-http-server/
│   │   ├── event-loop.js
│   │   ├── blocking.js
│   │   ├── commonjs-app.js
│   │   ├── commonjs-math.js
│   │   ├── esm-app.mjs
│   │   ├── esm-math.mjs
│   │   ├── process.js
│   │   ├── fs-write.js
│   │   ├── fs-read.js
│   │   ├── path.js
│   │   ├── async-fs.js
│   │   ├── callback-example.js
│   │   ├── promise-example.js
│   │   ├── async-await-example.js
│   │   ├── error-handling.js
│   │   ├── exit-codes.js
│   │   └── dotenv-example.js
│   │
│   └── phase-02/
│
├── progress/
│   └── learning-log.md
│
└── projects/
    ├── task-manager-api/
    ├── ecommerce-or-social-platform/
    └── ai-powered-saas/
```

The repository grows as each phase is reached. Future files should not be created just to make the tree look complete.

---

# GitHub Workflow

Every topic is treated like a small professional development task.

## 1. Sync `main`

```bash
git checkout main
git pull
```

## 2. Create a branch

Example:

```bash
git checkout -b phase-02/sql-basics
```

Branch naming convention:

```text
phase-XX/topic-name
```

Examples:

```text
phase-01/node-event-loop
phase-01/modules
phase-01/process-env
phase-01/fs-path
phase-01/async-fs
phase-02/sql-basics
```

## 3. Learn and Build

For each lesson:

```text
concept
→ exercise
→ run/test
→ notes
```

## 4. Review Changes

```bash
git status
```

## 5. Commit

Use meaningful commit messages.

Examples:

```text
feat: add raw Node HTTP server
docs: learn Node event loop fundamentals
fix: return 404 for unknown routes
refactor: extract JSON response helper
chore: move notes to correct phase
test: add auth service tests
```

Avoid vague commits such as:

```text
update
changes
stuff
final
```

## 6. Push

```bash
git push -u origin <branch-name>
```

## 7. Open Pull Request

Pull Requests target:

```text
main
```

Before merging:

- review the PR description
- review `Files changed`
- check for accidental files
- confirm `.env` or secrets are not included
- verify file locations

## 8. Merge

Merge only after the review looks correct.

## 9. Sync Local Main

```bash
git checkout main
git pull
git status
```

Expected:

```text
nothing to commit, working tree clean
```

---

# Learning Workflow

Each backend topic follows:

```text
Learn
  ↓
Predict / Explain
  ↓
Build Exercise
  ↓
Run It
  ↓
Understand Mistakes
  ↓
Write Notes
  ↓
Commit
  ↓
Push
  ↓
Pull Request
  ↓
Self Review
  ↓
Merge
```

This repository is intentionally designed to teach both backend development and day-to-day GitHub engineering habits.

---

# Next Phase

## Phase 2 — SQL & PostgreSQL

The next goal is to learn SQL without an ORM.

Topics include:

- PostgreSQL fundamentals
- tables and data types
- primary keys
- foreign keys
- constraints
- CRUD
- filtering
- ordering
- pagination
- joins
- aggregations
- subqueries
- `UNION`
- indexes
- query plans
- transactions
- normalization

Phase 2 proof task:

> Design at least four related tables and write at least 10 raw SQL queries, including joins and aggregation, before moving to Prisma.

---

# Capstone Projects

## Project 1 — Task Manager API

Phases 1–5.

Goal:

```text
request
→ validation
→ service
→ database
→ response
```

## Project 2 — E-commerce or Social Platform

Phases 6–9.

Focus:

- architecture
- caching
- payments
- notifications
- testing

## Project 3 — AI-Powered SaaS

Phases 10–13.

Focus:

- multi-tenancy
- queues
- AI workloads
- rate limits
- Docker
- CI/CD
- system design

---

# Guiding Principle

The goal is not to memorize every backend technology.

The goal is to become able to:

1. design data correctly
2. choose appropriate architecture
3. handle failure safely
4. build APIs with clear contracts
5. secure applications
6. deploy and operate systems
7. explain architectural tradeoffs
