'use strict'
var express=require('express');
var bodyParser=require('body-parser');
var app=express();

//configuracion de la carga de las rutas
var project_routes=require('./routes/project');

//configuracion middlewares: son metodos que se ejecutan antes de los controladores
//esto convierte cualquier dato que llegue a formato JSON
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');//en esta opcion * debe ser reeplazado por la ruta 
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//rutas
app.use('api/',project_routes);
//exportar modulo
module.exports=app;