const dotenv = require("dotenv");
console.log(dotenv);
dotenv.config();

// console.log(process.env.APP_PORT)

module.exports = process.env;
