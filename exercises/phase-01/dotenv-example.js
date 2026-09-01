require("dotenv").config();

console.log("Port:", process.env.PORT);
console.log("App name:", process.env.APP_NAME);
console.log("Secret exists:", Boolean(process.env.SECRET_KEY));
