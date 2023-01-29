import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  nuevoUsuario!: NuevoUsuario;
  nombre!: string;
  nombreusuario!: string;
  email:string;
  password: string;
  authorities: string;
  errMsj: string;


  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    this.nuevoUsuario = new NuevoUsuario(this.nombre,this.nombreusuario,this.email,this.password,this.authorities);
    this.authService.nuevo(this.nuevoUsuario).subscribe(data =>{
      alert("Usuario creado correctamente");
      this.router.navigate([''])
    },err =>{
      this.errMsj = err.error.mensaje;
          console.log(this.errMsj);
    })
  }
  
}
