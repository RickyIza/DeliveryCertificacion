import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { faUserPlus, faIdCard, faSave, faTimes, faUser, faCalendar, faMapMarkedAlt, faGenderless } from '@fortawesome/free-solid-svg-icons';
import { UsuarioService } from 'src/app/services/usuario.service';
import { FormBuilder, FormGroup, Validators} from '@angular/forms'
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-usuario-form',
  templateUrl: './usuario-form.component.html',
})
export class UsuarioFormComponent implements OnInit {
  faUserPlus =faUserPlus;
  faIdCard = faIdCard;
  faSave = faSave;
  faTimes = faTimes;
  faUser = faUser;
  faCalendar = faCalendar;
  faMapMarkedAlt = faMapMarkedAlt;
  faGenderless = faGenderless;

  @Input() usuario : Usuario;
  @Input() title : string;
  @Output() flagToReload = new EventEmitter<Boolean>();
 
  form: FormGroup;  
  submitted: boolean = false;

  constructor(private usuarioService: UsuarioService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      nombres: ['', [Validators.required]],
      apellidos: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      telefono: [''],
      direccion: [''],
      contraseña: [''],
      usuario1: [''],
      rol: ['',[Validators.maxLength(1)]],  
      correo: [''],    
    });
  }

  get f(){
    return this.form.controls;
  }

  onSubmit() : void {

    this.submitted = true;

    if(this.form.invalid){
      console.error('Error en formulario');
      return;
    }

    this.usuarioService.save(this.usuario).subscribe(
      result => {
        this.submitted = false;
        console.log(result);
        this.flagToReload.emit(true);
      }
    );
  }

  onReset() : void {
    this.submitted = false;
    this.form.reset();
    this.usuario = new Usuario();
  }

}
