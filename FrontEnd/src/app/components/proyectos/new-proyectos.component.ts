import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { ImageService } from 'src/app/service/image.service';
import { ProyectosService } from 'src/app/service/proyectos.service';

@Component({
  selector: 'app-new-proyectos',
  templateUrl: './new-proyectos.component.html',
  styleUrls: ['./new-proyectos.component.css']
})
export class NewProyectosComponent implements OnInit {
  nombre: string;
  descripcion: string;

  constructor(private Sproyectos: ProyectosService, private router: Router,private activatedRouter:ActivatedRoute,public imageService: ImageService) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const proyecto = new Proyectos(this.nombre, this.descripcion,this.imageService.url);
    this.Sproyectos.save(proyecto).subscribe(
      data =>{
        alert("Proyecto creado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo el añadir proyecto");
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
