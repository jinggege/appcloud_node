module.exports = [
    {
        name:"login",
        router:"/login",
        controllerPath:"/controllers/login/login.js",
        methods:["GET","POST"],
        desc:'登陆'
    },
    {
        name:"index",
        router:"/admin",
        controllerPath:"/controllers/index/index.js",
        methods:["GET","POST"],
        desc:'admin index'
    }

 
     
   
];

