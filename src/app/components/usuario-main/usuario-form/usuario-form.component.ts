import { Component, OnInit } from '@angular/core';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
})
export class UsuarioFormComponent implements OnInit {
  faUserPlus =faUserPlus;
  constructor() { }

  ngOnInit(): void {
  }

}
