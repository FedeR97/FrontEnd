import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-exp',
  templateUrl: './new-exp.component.html',
  styleUrls: ['./new-exp.component.css']
})
export class NewExpComponent implements OnInit {
  nombreE: string ='';
  descripcionE: string = '';
  fechaInicio: Date;
  fechaFin:Date;

  constructor(private sExperiencia: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate():void {
    const expe= new Experiencia(this.nombreE,this.descripcionE,this.fechaInicio,this.fechaFin);
    this.sExperiencia.save(expe).subscribe(data=>{
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },err =>{
    alert("fallo");
    this.router.navigate(['']);
    }
    )
  }
}
