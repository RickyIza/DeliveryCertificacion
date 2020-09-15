import { Component, OnInit } from '@angular/core';
import {UsuarioService} from 'src/app/services/usuario.service';
import {Usuario} from 'src/app/models/usuario';
import {faEye,faPencilAlt,faTrash} from '@fortawesome/free-solid-svg-icons';
import swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {

  faEye = faEye;
  faPencilAlt = faPencilAlt;
  faTrash = faTrash;

  usuarios : Usuario[];

  constructor(private usuarioService : UsuarioService) { }

  ngOnInit(): void {
  }

  list():void{
    this.usuarioService.list().subscribe(result => {this.usuarios = result});
  }

}
