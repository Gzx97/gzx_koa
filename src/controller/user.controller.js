const { createUser } = require("../service/user.service");
class UserController {
  async register(ctx, next) {
    // 获取数据 操作数据库(service层) 返回结果
    console.log(ctx.request.body);

    const { user_name, password } = ctx.request.body;

    const res = await createUser(user_name, password);

    console.log(res);

    ctx.body = ctx.request.body;
  }

  async login(ctx, next) {
    ctx.body = "登录成功";
  }
  async index(ctx, next) {
    ctx.body = "Hello world";
  }
}

module.exports = new UserController();
