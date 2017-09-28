
var URL = require("url");
var Render = require(global.CODE_PATH+"/config/render_cfg.js");

/**
 * 登录控制器
 */

class Login{

    constructor(){ }

    async control(ctx){
        ctx.body = await Render("admin/login/login");

    }



}


module.exports = new Login();