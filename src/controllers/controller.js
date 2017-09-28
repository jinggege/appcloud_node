/**
 * 控制器管理 
 * 
 */

var Router = require('koa-router')
//var appCfg = require(global.CODE_PATH+'/config/app_cfg.js');
var routeCfg = require(global.CODE_PATH+'/config/route_cfg.js');

class Controller{

    constructor(){
        this.app = null;
    }

    start(app){
        this.app = app;
        this.regControl();
        //this.uploadCfg();
    }

    regControl(){
        var _this   = this;
        var ct      = null;
        var router  = null;
        var methods = null;

        routeCfg.forEach(function(ele) {
            methods = ele.methods;
            ct      = require(global.CODE_PATH+ele.controllerPath).control;
            router  = new Router();
            methods.forEach(function(md){
                router[md.toLowerCase()](ele.router,ct)
            });
            
            // 加载路由中间件
            _this.app.use(router.routes()).use(router.allowedMethods());
        });

        methods = null;
    }


    /*
    uploadCfg(){
        const multer = require('koa-multer');//加载koa-multer模块  
        var storage = multer.diskStorage(
            {  
                destination: function (req, file, cb) {  
                cb(null, 'static/upload/')  
            },  
            //修改文件名称  
            filename: function (req, file, cb) {  
            var fileFormat = (file.originalname).split(".");  
                cb(null,Date.now() + "." + fileFormat[fileFormat.length - 1]);  
            }  
        })  
        //加载配置  
        var upload = multer({ storage: storage });  
        var router  = new Router();
        router.post('/upload', upload.single('avatar'), async (ctx, next) => {  
            var url = appCfg.server.static_domain+"/upload/" +ctx.req.file.filename;
            ctx.body = { 
                
                filename: url//返回文件名  
            }  
        }) 

        this.app.use(router.routes()).use(router.allowedMethods())
    }

    */

}



module.exports = new Controller();

