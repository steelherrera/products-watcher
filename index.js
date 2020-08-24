const { handleController } = require('./Controller');

exports.handler = function(){
    return handleController.apply(null, arguments);
};