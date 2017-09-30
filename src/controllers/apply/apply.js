
var URL = require("url");
var Render = require(global.CODE_PATH+"/config/render_cfg.js");

/**
 * 申请APP
 */

class Apply{

    constructor(){ }

    async control(ctx){
        ctx.body = await Render("admin/apply/apply");

    }



}


module.exports = new Apply();