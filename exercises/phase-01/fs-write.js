const fs = require('fs');
fs.writeFileSync("exercises/phase-01/message.txt",
    "Hello from Node.js fs module!"
);
console.log("File Created")