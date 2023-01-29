import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-new-habilidades',
  templateUrl: './new-habilidades.component.html',
  styleUrls: ['./new-habilidades.component.css']
})
export class NewHabilidadesComponent implements OnInit {

    nombre: string;
    porcentaje: number;
  
    constructor(private sHabilidades: HabilidadesService, private router: Router) { }
  
    ngOnInit(): void {
    }
  
    onCreate():void {
      const habilidad= new Habilidades(this.nombre, this.porcentaje);
      this.sHabilidades.save(habilidad).subscribe(data=>{
        alert("Habilidad añadida");
        this.router.navigate(['']);
      },err =>{
      alert("Fallo añadir la habilidad");
      this.router.navigate(['']);
      }
      )
    }
  }
  
