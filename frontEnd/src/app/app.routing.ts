import { from } from "rxjs";
import { ModuleWithProviders } from "@angular/core";
import {Routes,RouterModule} from '@angular/router';
import { Route } from "@angular/compiler/src/core";


// importamos los componentes del proyecto
import {LoginComponent} from './components/login/login.component';


// definimos las rutas

const appRoutes: Routes=[
    {path:'login',component:LoginComponent}
];

//exportamos las rutas 
export const appRoutingProviders:any[]=[];
export const routing:ModuleWithProviders<Route>=RouterModule.forRoot(appRoutes);