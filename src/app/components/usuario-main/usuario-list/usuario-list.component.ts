import { Component, OnInit } from '@angular/core';
import { faListAlt, faEye, faPencilAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {
  faListAlt = faListAlt;
  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  usuario : Usuario[];
  constructor(private usuarioService:UsuarioService) { }

  ngOnInit(): void {
    this.list();
  }

  delete(u : Usuario) : void{
    swal.fire({
      title: '¿Estas seguro que desea continuar?',
      text: "El usuario: " + u.nombre + " " + u.apellido + " será eliminado.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar',
      cancelButtonText: 'Cancelar'
    }).then((result) =>{
      if(result.value){
        this.usuarioService.delete(u).subscribe(
          result => console.log(result)
        ) 
      }
    })
  }

  list() : void {
    this.usuarioService.list().subscribe(result => {      
      this.usuario = result;
    });
  }
}
