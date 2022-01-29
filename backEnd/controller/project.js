'use strict'
var Project=require('../models/project');
var fs=require('fs');//libreria de nodeJs file system , es para borrar un archivo

//clase que contiene los metodos
var controller={
    //metodo guardar
    saveProject:function(req,res){
        var project=new Project(); //instancio el objeto para acceder a los objetos del modelo
        var params=req.body;
        project.user=params.user;
        project.email=params.email;
        project.keys=params.keys;
        project.save((err,projectStored)=>{
            if(err) return res.status(500).send({message:"error al guardar el documento"});
            if(!projectStored) return res.status(404).send({message:"no se pudo guardar el documento"});

            return res.status(200).send({project:projectStored});
        });
    }
};

module.exports=controller;