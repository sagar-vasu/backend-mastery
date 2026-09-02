# SQL & PostgreSQL Fundamentals

## What Is a Database?

A database provides persistent and structured storage for application data.

A typical backend flow looks like:

```text
Frontend
   ↓
Backend API
   ↓
Database
```

Unlike temporary in-memory JavaScript data, database data can remain available after the backend process restarts.

## What Is SQL?

SQL stands for Structured Query Language.

SQL is used to communicate with relational databases.

Common database operations include:

```sql
SELECT * FROM users;
```

```sql
INSERT INTO users (name, email)
VALUES ('Ali', 'ali@example.com');
```

```sql
UPDATE users
SET name = 'Ali Khan'
WHERE id = 1;
```

```sql
DELETE FROM users
WHERE id = 1;
```

A useful HTTP comparison is:

```text
POST       → INSERT
GET        → SELECT
PUT/PATCH  → UPDATE
DELETE     → DELETE
```

These are not the same concepts, but the comparison is useful for understanding how API operations eventually interact with a database.

## SQL vs PostgreSQL

SQL is a language.

PostgreSQL is a relational database management system that understands SQL.

A useful comparison is:

```text
JavaScript → language
Node.js    → runtime

SQL        → language
PostgreSQL → database system
```

## Relational Databases

PostgreSQL is a relational database.

Relational databases organize information into tables and allow tables to have relationships with one another.

Example:

```text
users
-------------------------
id | name | email

posts
-------------------------
id | title | user_id
```

The `user_id` in `posts` can identify which user created a post.

Later, this relationship can be enforced using a foreign key.

## PostgreSQL Structure

A useful hierarchy is:

```text
PostgreSQL Server
       ↓
Database
       ↓
Schema
       ↓
Table
       ↓
Rows and Columns
```

### Database

A PostgreSQL server can manage multiple databases.

Examples:

```text
backend_mastery
task_manager
ecommerce
```

### Schema

Schemas organize database objects and act as namespaces inside a database.

PostgreSQL commonly provides a schema named:

```text
public
```

A table called `users` may therefore be represented as:

```text
public.users
```

### Table

A table stores records representing one general type of entity.

Examples:

```text
users
posts
comments
likes
```

### Column

A column represents one attribute of a record.

Example:

```text
users

id
name
email
```

### Row

A row represents one stored record.

Example:

```text
1 | Ali | ali@example.com
```

## Frontend Mental Model

A JavaScript structure like:

```js
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
];
```

can help form an initial mental model:

```text
array           → table
object          → row
object property → column
```

The comparison is only conceptual.

Databases additionally provide features such as:

```text
persistence
constraints
relationships
transactions
indexes
concurrent access
querying
```

## Data Integrity

Application validation is important, but databases should also protect important data rules.

Example application validation:

```js
if (!email) {
  throw new Error("Email required");
}
```

A database can later enforce the same integrity rule with a constraint such as:

```sql
email TEXT NOT NULL
```

A useful backend model is:

```text
Frontend validation
       ↓
Request validation
       ↓
Business logic
       ↓
Database constraints
```

Each layer protects a different part of the system.

## Why Relationships Matter

Instead of duplicating user information inside every post:

```text
post
----------------
title
user_name
user_email
```

we can store the user once:

```text
users

id | name | email
1  | Ali  | ali@example.com
```

and reference that user:

```text
posts

id | title      | user_id
1  | SQL Basics | 1
```

This helps reduce duplication and improves data integrity and maintainability.

## Key Takeaways

- SQL is a language used to communicate with relational databases.
- PostgreSQL is a relational database management system.
- A PostgreSQL server can contain multiple databases.
- A database can contain schemas.
- Schemas contain tables and other database objects.
- Tables contain rows and columns.
- A row represents one record.
- A column represents one attribute.
- Relational databases allow tables to reference related data.
- Backend validation and database constraints work together to protect data integrity.
