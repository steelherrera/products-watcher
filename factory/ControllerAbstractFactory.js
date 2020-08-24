
const HashMap = require('hashmap');
const controllersFMap = new HashMap();

exports.registerCustomControllerFactory = (environment, ControllerFactory)=>{
    controllersFMap.set(environment, ControllerFactory);
};

exports.getController = function(){
    const environment = process.env.ENVIRONMENT ? process.env.ENVIRONMENT : "AWS";
    if( controllersFMap.has(process.env.CONTROLLER_ENVIRONMENT) ){
        const ControllerFactory = controllersFMap.get(process.env.CONTROLLER_ENVIRONMENT);
        return ControllerFactory.getController.apply(null, arguments);
    }else{
        return require("./controller/"+(environment.toLowerCase())+"/ControllerFactory").getController.apply(null, arguments);
    }
};