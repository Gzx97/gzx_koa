const dotenv = require("dotenv");
// console.log(dotenv);
// console.log(process.env);
dotenv.config();

console.log(process.env)
console.log(process.env.APP_PORT)

module.exports = process.env;
