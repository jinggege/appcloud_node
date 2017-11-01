
var URL = require("url");
var Render = require(global.CODE_PATH+"/config/render_cfg.js");

/**
 * 登录控制器
 */

class NoteBook{

    constructor(){ }

    async control(ctx){
        ctx.body = await Render("notebook/title_set");

    }



}


module.exports = new NoteBook();