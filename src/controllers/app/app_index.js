
var URL = require("url");
var Render = require(global.CODE_PATH+"/config/render_cfg.js");

/**
 * APP 首页
 */

class AppIndex{

    constructor(){ }

    async control(ctx){
        ctx.body = await Render("admin/app/app_index");
    }



}


module.exports = new AppIndex();