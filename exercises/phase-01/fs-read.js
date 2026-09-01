const fs  = require('fs');

const content = fs.readFileSync(
  "exercises/phase-01/message.txt",
  "utf8"
);

console.log(content);