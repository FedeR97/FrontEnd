import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { ProyectosService } from 'src/app/service/proyectos.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyecto: Proyectos[] = [];

  constructor(private sproyectos: ProyectosService,private tokenService: TokenService) { }
  isLogged = false;
  ngOnInit(): void {
    this.cargarProyecto();
  }

  cargarProyecto():void{
    this.sproyectos.lista().subscribe(
      data =>{
        this.proyecto = data;
        if(this.tokenService.getToken()){
          this.isLogged = true;
        }else{
          this.isLogged = false;
        }
      }
    )
  }

  delete(id?: number){
    if(id != undefined){
      this.sproyectos.delete(id).subscribe(
        data =>{
          this.cargarProyecto();
        }, err =>{
          alert("No se pudo borrar el proyecto");
        }
      )
    }
  }
}
