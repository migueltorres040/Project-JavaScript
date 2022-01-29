'use strict'
var mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/project-javascript')
        .then(()=>{
            console.log("conexion establecida");
        })
        .catch(err=>console.log(err));