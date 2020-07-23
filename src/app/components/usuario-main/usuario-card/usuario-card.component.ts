import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';
import { ActivatedRoute } from '@angular/router';
import { faUser, faIdCard, faPhone, faMapMarked, faKey, faAt } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-usuario-card',
  templateUrl: './usuario-card.component.html',
  styleUrls: ['./usuario-card.component.css']
})
export class UsuarioCardComponent implements OnInit {

  faUser = faUser;
  faIdCard = faIdCard;
  faPhone = faPhone;
  faMapMarked = faMapMarked;
  faKey = faKey;
  faAt = faAt;

  usuario : Usuario;

  constructor(private usuarioService : UsuarioService,
    private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        if(params['id']){
          this.usuarioService.retrieve(params['id']).subscribe(
            result => this.usuario = result
          )
        }
    });
  }

}
