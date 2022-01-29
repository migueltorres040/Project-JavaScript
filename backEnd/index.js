'use strict'
var mongoose=require('mongoose');
var app=require('./app');//llamo a la variable creada en el app.js
var port=3700;// creo puerto del servidor
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/project-javascript')
        .then(()=>{
            console.log("conexion establecida");
            //creo el servidor
            app.listen(port,()=>{
                console.log("Servidor corriendo en el puerto 3700");
            });
        })
        .catch(err=>console.log(err));