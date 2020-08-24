const JumboStrategy = require('./../parse-strategies/JumboStrategy');

exports.getJumboStoreStrategy = function(){
    return new JumboStrategy(...arguments);
};