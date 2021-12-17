const { getUserInfo } = require("../service/user.service");

const userValidator = async (ctx, next) => {
  const { user_name, password } = ctx.request.body;
  // 合法性
  // if (!user_name || !password) {
  //   console.error('用户名或密码为空', ctx.request.body)
  //   ctx.app.emit('error', userFormateError, ctx)
  //   return
  // }
  if (!user_name || !password) {
    ctx.status = 400;
    ctx.body = {
      code: "10001",
      msg: "用户名密码为空mi",
      data: "",
    };
    return;
  }
  await next();
};

module.exports = { userValidator };
