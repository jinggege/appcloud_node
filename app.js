"use strict"
/**
 * 数据  ， 页面渲染服务
 */

 global.CODE_PATH = __dirname+"/src";

 var Koa = require("koa");

 var Cors = require("koa-cors");

 var AppCfg = require(global.CODE_PATH+ "/config/app_cfg.js");

 var Controller = require(global.CODE_PATH+"/controllers/controller.js");

 var app = new Koa();

 app.use( Cors() );

 Controller.start(app);

 app.listen( AppCfg.serverPort );

 console.log("====appclod node server start by "+AppCfg.serverPort+" ====");



