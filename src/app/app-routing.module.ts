import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoMainComponent } from './components/producto-main/producto-main.component';
import { UsuarioMainComponent } from './components/usuario-main/usuario-main.component';

const routes: Routes = [
  {path: '', redirectTo: '/', pathMatch: 'full'},
  {path: 'productos', component: ProductoMainComponent},
  {path: 'usuarios', component: UsuarioMainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
