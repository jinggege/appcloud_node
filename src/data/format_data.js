
/**
 * 数据格式化
 */

class FormatData{

    constructor(){ }

    formatResData(code,data,msg){
        var resData = {
            response:{
                code:code,
                data:data,
                msg:msg
            }
        };

        return JSON.stringify(resData);
    }



}


module.exports = new FormatData();