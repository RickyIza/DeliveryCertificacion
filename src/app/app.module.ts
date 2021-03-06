import { BrowserModule } from '@angular/platform-browser';
import { NgModule,LOCALE_ID} from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);


import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioMainComponent } from './components/usuario-main/usuario-main.component';
import { UsuarioListComponent } from './components/usuario-main/usuario-list/usuario-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { MasmaPipe } from './shared/pipes/masma.pipe';

import { UsuarioService } from './services/usuario.service';
import { RolPipe } from './shared/pipes/rol.pipe';
import { EstadoPipe } from './shared/pipes/estado.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioMainComponent,
    UsuarioListComponent,
    NavbarComponent,
    MasmaPipe,
    RolPipe,
    EstadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule  
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue : 'es-EC'
    }  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
