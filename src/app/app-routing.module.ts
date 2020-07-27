import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductoMainComponent } from './components/producto-main/producto-main.component';
import { UsuarioMainComponent } from './components/usuario-main/usuario-main.component';
import { ProductoCardComponent } from './components/producto-main/producto-card/producto-card.component';
import { UsuarioCardComponent } from './components/usuario-main/usuario-card/usuario-card.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'productos', component: ProductoMainComponent},
  { path: 'usuarios', component: UsuarioMainComponent},
  { path: 'usuarios/:id', component: UsuarioCardComponent},
  { path: 'productos/:id', component:ProductoCardComponent},
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
