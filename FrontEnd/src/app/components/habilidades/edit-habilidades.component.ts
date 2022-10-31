import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';

@Component({
  selector: 'app-edit-habilidades',
  templateUrl: './edit-habilidades.component.html',
  styleUrls: ['./edit-habilidades.component.css']
})
export class EditHabilidadesComponent implements OnInit {
  habilidad: Habilidades = null;
  constructor(private shabilidades:HabilidadesService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id=this.activatedRouter.snapshot.params['id'];
    this.shabilidades.detail(id).subscribe(data =>{
      this.habilidad = data;
    }, err =>{
      alert('Error al modificar la habilidad');
      this.router.navigate(['']);
    }
    )
  }

  onUpdate(): void{
    const id=this.activatedRouter.snapshot.params['id'];
    this.shabilidades.update(id,this.habilidad).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert('Error al modificar habilidad');
        this.router.navigate(['']);
      }
    )
  }
}
