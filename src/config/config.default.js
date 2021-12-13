const dotenv = require("dotenv");
// console.log(dotenv);
// console.log(process.env);
dotenv.config();

// console.log(process.env)
console.log('---------start------')
console.log(process.env.App_PORT)
console.log(process.env.APP_PORT)
console.log('---------end-------')

module.exports = process.env;
