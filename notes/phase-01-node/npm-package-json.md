# npm, package.json, and Semantic Versioning

## What is `package.json`?

`package.json` stores metadata and configuration for a Node.js project.

Important fields I used:

```json
{
  "name": "backend-mastery",
  "version": "1.0.0",
  "scripts": {}
}
```

## npm Scripts

Scripts let me create shortcuts for commands I run often.

Example:

```json
"scripts": {
  "start": "node exercises/phase-01/raw-http-server/server.js",
  "event-loop": "node exercises/phase-01/event-loop.js"
}
```

I can run them with:

```bash
npm start
```

or:

```bash
npm run event-loop
```

## Semantic Versioning

Versions usually follow this format:

```text
MAJOR.MINOR.PATCH
```

Example:

```text
1.0.0
```

A simple way to think about it:

```text
1.0.1 = patch / bug fix
1.1.0 = new backward-compatible feature
2.0.0 = breaking change
```

## What I Learned

`package.json` is an important control file for Node.js projects.

It can contain:

* project metadata
* version information
* npm scripts
* dependencies
* development dependencies
* configuration used by tooling

npm scripts help standardize how a project is run.

Instead of remembering long commands, developers can use consistent commands such as:

```bash
npm start
npm test
npm run dev
```
