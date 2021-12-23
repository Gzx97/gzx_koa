const { getUserInfo } = require("../service/user.service");
// 验证用户名密码是否为空
const userValidator = async (ctx, next) => {
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
// 验证用户名是否存在
const verifyUser = async (ctx, next) => {
  let body = ctx.request.body;
  try {
    body = JSON.parse(ctx.request.body);
  } catch (e) {
    // console.log("请求数据异常", e);
  }
  const { user_name, password } = body;

  if (await getUserInfo({ user_name })) {
    ctx.status = 409;
    ctx.body = {
      code: "10002",
      msg: "用户已经存在",
      data: "",
    };
    return;
  }
  await next();
};
module.exports = { userValidator, verifyUser };
