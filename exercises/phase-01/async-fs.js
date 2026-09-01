const fs = require("fs/promises");
const path = require("path");

async function run() {
  try {
    const filePath = path.join(
      "exercises",
      "phase-01",
      "async-message.txt",
    );

    await fs.writeFile(
      filePath,
      "Hello from async Node.js file system!",
    );

    console.log("File written");

   const content = await fs.readFile(filePath, "utf8");
    console.log("File content:", content);
  } catch (error) {
    console.error("Something went wrong:", error.message);
  }
}

run();