const { createUser ,getUserInfo } = require("../service/user.service");
class UserController {
  async register(ctx, next) {
    // 获取数据 操作数据库(service层) 返回结果
    // console.log(ctx.request.body);
    let body = ctx.request.body
    try {
      body =  JSON.parse(ctx.request.body);
    } catch (e) {
      // console.log("请求数据异常", e);
    }
    const { user_name, password } = body

  

 
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
