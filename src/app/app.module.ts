import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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


@NgModule({
  declarations: [
    AppComponent,
    UsuarioMainComponent,
    UsuarioFormComponent,
    UsuarioListComponent,
    ProductoMainComponent,
    ProductoFormComponent,
    ProductoListComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
