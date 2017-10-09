module.exports = [
    {
        name:"login",
        router:"/login",
        controllerPath:"/controllers/login/login.js",
        methods:["GET","POST"],
        desc:'登陆'
    },
    {
        name:"admin",
        router:"/",
        controllerPath:"/controllers/index/index.js",
        methods:["GET","POST"],
        desc:'admin index'
    },
    {
        name:"admin",
        router:"/admin",
        controllerPath:"/controllers/index/index.js",
        methods:["GET","POST"],
        desc:'admin index'
    },
    {
        name:"apply",
        router:"/apply",
        controllerPath:"/controllers/apply/apply.js",
        methods:["GET","POST"],
        desc:'apply app'
    },
    {
        name:"apps",
        router:"/app",
        controllerPath:"/controllers/app/app_factory.js",
        methods:["GET","POST"],
        desc:'app index'
    }

 
     
   
];

