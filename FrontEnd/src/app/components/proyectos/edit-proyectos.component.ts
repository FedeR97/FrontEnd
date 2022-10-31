import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-edit-proyectos',
  templateUrl: './edit-proyectos.component.html',
  styleUrls: ['./edit-proyectos.component.css']
})
export class EditProyectosComponent implements OnInit {
  proyecto: Proyectos = null;
  constructor(private sproyecto:ProyectosService,private activatedRouter:ActivatedRoute,private router:Router,public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sproyecto.detail(id).subscribe(
      data=>{
        this.proyecto = data;
      },err =>{
        alert("Error al modificar");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.sproyecto.update(id, this.proyecto).subscribe(
      data =>{
        this.router.navigate(['']);
      }, err =>{
        alert('Error al modificar el proyecto');
        this.router.navigate(['']);
      }
    )
  }

  uploadImage($event:any){
    const id = this.activatedRouter.snapshot.params['id'];
    const name = "proyecto_" + id;
    this.imageService.uploadImage($event,name)
  }

}
