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
import { ProductoMainComponent } from './components/producto-main/producto-main.component';
import { ProductoFormComponent } from './components/producto-main/producto-form/producto-form.component';
import { ProductoListComponent } from './components/producto-main/producto-list/producto-list.component';
import { UsuarioMainComponent } from './components/usuario-main/usuario-main.component';
import { UsuarioFormComponent } from './components/usuario-main/usuario-form/usuario-form.component';
import { UsuarioListComponent } from './components/usuario-main/usuario-list/usuario-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ProductoCardComponent } from './components/producto-main/producto-card/producto-card.component';
import { MasmaPipe } from './shared/pipes/masma.pipe';
import { SexdescPipe } from './shared/pipes/sexdesc.pipe';
import { UsuarioService } from './services/usuario.service';
import { ServiceInterceptor } from './services/service.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioMainComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    ProductoMainComponent,
    ProductoFormComponent,
    ProductoListComponent,
    NavbarComponent,
    ProductoCardComponent,
    MasmaPipe,
    SexdescPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule,
    ReactiveFormsModule  
  ],
  providers: [
    UsuarioService, {
      provide: HTTP_INTERCEPTORS,
      useClass: ServiceInterceptor,
      multi: true
    },
    {
      provide: LOCALE_ID,
      useValue : 'es-EC'
    }  
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
