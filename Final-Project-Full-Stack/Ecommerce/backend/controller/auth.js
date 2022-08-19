const user = require("../model/users");
const userFn = require("../utils/auth");

exports.registers = userFn.register(user);
exports.Login = userFn.login(user);

