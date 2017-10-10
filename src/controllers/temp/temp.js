
var URL = require("url");

var Render = require(global.CODE_PATH+"/config/render_cfg.js");

var FD = require(global.CODE_PATH+"/data/format_data.js");

/**
 * 模板控制器
 */

class Temp{

    constructor(){ }

    async control(ctx){

        var tempId = ctx.params.id;

        var vmName = "temp"+tempId;

        var tempHtml = await Render( "admin/app/temp/"+vmName );

        ctx.body = FD.formatResData(0,tempHtml, "ok");
    }


}


module.exports = new Temp();