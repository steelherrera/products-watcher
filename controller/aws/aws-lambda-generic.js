'use strict'
const BusinessFactory = require("./../../factory/BusinessFactory");

exports.handler = (event, context) => {
    return new Promise(async (resolve, reject)=>{
        try{
            //TODO
            resolve();
        }catch(exc){
            reject(exc);
        }        
    });    
};