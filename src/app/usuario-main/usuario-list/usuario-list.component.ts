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

  list() : void {
    this.usuarioService.list().subscribe(result => {      
      this.usuario = result;
    });
  }
}
