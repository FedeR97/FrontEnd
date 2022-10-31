import { Component, OnInit } from '@angular/core';
import { Habilidades } from 'src/app/model/habilidades';
import { HabilidadesService } from 'src/app/service/habilidades.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {
  habilidad: Habilidades[]=[];
  variable: string = "";

  constructor(private shabilidades:HabilidadesService, private tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  }

  cargarHabilidad():void{
    this.shabilidades.lista().subscribe(
      data => {
        this.habilidad = data;
      }
    )
  }

  delete(id:number){
    if(id !=undefined){
      this.shabilidades.delete(id).subscribe(
        data =>{
          this.cargarHabilidad();
        }, err=>{
          alert("No se pudo borrar la habilidad");
        }
      )
    }
  }

}
