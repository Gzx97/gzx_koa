const Koa = require("koa");
const koaBody = require("koa-body");
const userRouter = require("../router/user.route");
// const userRouter = require('./router')
const cors = require("koa2-cors"); //跨域处理
const app = new Koa();
app.use(cors());
app.use(koaBody({
    enableTypes: ['json', 'form', 'text'],
    multipart: true // ***** 就是这个 (是否支持 multipart-formdate 的表单)
  }));
app.use(userRouter.routes());

module.exports = app;
