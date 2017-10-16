
var URL = require("url");
var Render = require(global.CODE_PATH+"/config/render_cfg.js");

/**
 * 首页
 */

class Index{

    constructor(){ }

    async control(ctx){
        ctx.body = await Render("home/index/index");

    }



}


module.exports = new Index();