const { createUser ,getUserInfo } = require("../service/user.service");
class UserController {
  async register(ctx, next) {
    // 获取数据 操作数据库(service层) 返回结果
    // console.log(ctx.request.body);

    const { user_name, password } = ctx.request.body;

    // console.log(res);
    // 合法性 
    if (!user_name || !password) {
      ctx.status = 400;
      ctx.body = {
        code: "10001",
        msg: "用户名密码为空",
        data: "",
      };
      return;
    }
    // 合理性

     if(getUserInfo({user_name})){
      ctx.status = 409;
      ctx.body = {
        code: "10002",
        msg: "用户已经存在",
        data: "",
      };
      return
     }
    const res = await createUser(user_name, password);

    ctx.body = {
      code: 0,
      msg: "注册成功",
      data: {
        id: res.id,
        user_name: res.user_name,
      },
    };
  }

  async login(ctx, next) {
    ctx.body = "登录成功";
  }
  async index(ctx, next) {
    ctx.body = "Hello world";
  }
}

module.exports = new UserController();
