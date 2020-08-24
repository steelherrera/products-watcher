const ControllerAbstractFactory = require('./factory/ControllerAbstractFactory');

module.exports = {
    handleController: function(){
        let arr = [__dirname];
        arr = arr.concat(Array.prototype.slice.call(arguments));
        const Controller = ControllerAbstractFactory.getController.apply(null, arr);
        if( Controller ){
            return new Promise((resolve, reject)=>{
                const handler = Controller.handler(arguments[0], arguments[1], arguments[2]);
                if( handler.then ){
                    return handler.then(resolve).catch(reject);
                }
            });
        }else{
            throw new Error("Controller not found, env: "+process.env.ENVIRONMENT);
        }        
    }
};