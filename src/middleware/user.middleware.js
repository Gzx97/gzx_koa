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
const verifyUser = async (ctx, next) => {
  const { user_name } = ctx.request.body;

  // if (await getUerInfo({ user_name })) {
  //   ctx.app.emit('error', userAlreadyExited, ctx)
  //   return
  // }
  try {
    const res = await getUserInfo({ user_name });

    if (res) {
      console.error("用户名已经存在", { user_name });
      ctx.app.emit("error", userAlreadyExited, ctx);
      return;
    }
  } catch (err) {
    console.error("获取用户信息错误", err);
    ctx.app.emit("error", userRegisterError, ctx);
    return;
  }

  await next();
};
module.exports = { userValidator, verifyUser };