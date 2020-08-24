exports.getController = function(){    
    const event = arguments[1];
    const contextPath = arguments[0];
    if( !event )return null;       
    const _function = require(contextPath+"/controller/aws/aws-lambda-generic");
    return _function;
};