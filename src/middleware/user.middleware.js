const { getUserInfo } = require("../service/user.service");
const {userFormateError,userAlreadyExisted} = require("../constants/err.type");
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
    ctx.app.emit("error", userFormateError, ctx);
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
    ctx.app.emit("error", userAlreadyExisted, ctx);
    return;
  }
  await next();
};
module.exports = { userValidator, verifyUser };
