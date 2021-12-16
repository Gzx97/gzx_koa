const User = require("../model/user.model");
class UserService {
  async createUser(user_name, password) {
    // 写入数据库
    console.log(user_name,password)
    // await表达式: promise对象的值
    const res = await User.create({
      user_name ,
      password,
    });
    console.log(res); 
    // return res;
  }
}

module.exports = new UserService();
