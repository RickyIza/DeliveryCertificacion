import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
@Component({
  selector: 'app-usuario-main',
  templateUrl: './usuario-main.component.html',

})
export class UsuarioMainComponent implements OnInit {

  mainUsuario : Usuario; //Un atributo del componente AlumnoMain que se va a inyectar en
  //el componente AlumnoForm

mainTitle : string;
mainReload : boolean;

constructor() { }

ngOnInit(): void {
this.onInit();    
}

onInit() : void {
this.mainUsuario = new Usuario();
this.mainTitle = "Registro de nuev@ alumno";
this.mainReload = false;
}

toUpdate($event) : void{    
this.mainUsuario = $event;
console.log(this.mainUsuario);
this.mainTitle = "Editando registro de " + $event.nombres + " " + $event.apellidos;
}

toReload($event) : void {    
this.onInit();
console.log($event);   
this.mainReload = $event; 
}

reloadDone($event){
this.mainReload = !$event;    
}

}
