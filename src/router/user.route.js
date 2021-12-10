const Router = require("koa-router");

const { register ,login ,index} = require("../controller/user.controller");

const router = new Router({ prefix: "/users" });


// 换
router.get("/", index);

// 注册接口
router.post("/register", register);

// 登录接口
router.post('/login',login)

module.exports = router;
