'use strict'
var mongoose=require('mongoose');
var Schemma=mongoose.Schema;
var ProjectSchema=Schemma({
    user:String,
    email:String,
    keys:String
});
module.exports=mongoose.model('project-javascript',ProjectSchema);