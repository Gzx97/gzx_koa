class UserController {
  async register(ctx, next) {
    ctx.body = "用户注册成功";
  }

  async login(ctx, next) {
    ctx.body = "登录成功";
  }
  async index(ctx, next) {
    ctx.body = "Hello world";
  }
}

module.exports = new UserController();
