const path = require("path");

const filePath = path.join(
  "exercises",
  "phase-01",
  "message.txt"
);

console.log("Joined path:", filePath);
console.log("File name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
console.log("Directory:", path.dirname(filePath));