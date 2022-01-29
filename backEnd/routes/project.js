'use strict'
var express=require('express');
const{route}=require('../app');
var ProjectController=require('../controller/project');//llamo a los controladores
var router=express.Router();



//configuramos las rutas
router.post('saveProject',ProjectController.saveProject);


module.exports=router;