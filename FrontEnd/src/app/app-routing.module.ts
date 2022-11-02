import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NeweducacionComponent } from './components/educacion/neweducacion.component';
import { EditExpComponent } from './components/experiencia/edit-exp.component';
import { NewExpComponent } from './components/experiencia/new-exp.component';
import { EditHabilidadesComponent } from './components/habilidades/edit-habilidades.component';
import { NewHabilidadesComponent } from './components/habilidades/new-habilidades.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/login/register.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'nuevaexp',component:NewExpComponent},
  {path:'editexp/:id',component:EditExpComponent},
  {path:'nuevaedu',component:NeweducacionComponent},
  {path:'editedu/:id',component:EditEducacionComponent},
  {path:'nuevahabilidad',component:NewHabilidadesComponent},
  {path:'editHabilidad/:id',component:EditHabilidadesComponent},
  {path:'editacercade/:id',component:EditAcercaDeComponent},
  {path:'nuevoproyecto',component:NewProyectosComponent},
  {path:'editproyecto/:id',component:EditProyectosComponent},
  {path:'register',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
