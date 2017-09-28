
var URL = require("url");
var Render = require(global.CODE_PATH+"/config/render_cfg.js");

/**
 * 后台首页
 */

class Index{

    constructor(){ }

    async control(ctx){
        ctx.body = await Render("admin/index/index");

    }



}


module.exports = new Index();