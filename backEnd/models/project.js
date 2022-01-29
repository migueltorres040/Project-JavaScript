'use strict'
var mongoose=require('mongoose');
var Schema=mongoose.Schema;
var ProjectSchema=Schema({
    user:String,
    email:string,
    key:string
});
module.exports=mongoose.model('project-javascript',ProjectSchema);