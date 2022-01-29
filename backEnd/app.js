'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var app=express();



//configuracion middlewares: son metodos que se ejecutan antes de los controladores
//esto convierte cualquier dato que llegue a formato JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//exportar modulo
module.exports=app;