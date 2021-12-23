const { getUserInfo } = require("../service/user.service");

const userValidator = async (ctx, next) => {
  // console.log(ctx.request.body)
  let body = ctx.request.body;
  try {
    body = JSON.parse(ctx.request.body);
  } catch (e) {
    // console.log("请求数据异常", e);
  }
  const { user_name, password } = body;
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
