const Koa = require("koa");
const userRouter = require('../router/user.route')
// const userRouter = require('./router')

const app = new Koa();

app.use(userRouter.routes()); 

module.exports = app