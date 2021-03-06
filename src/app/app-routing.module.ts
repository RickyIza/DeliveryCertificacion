import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsuarioMainComponent } from './components/usuario-main/usuario-main.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  { path: '', redirectTo: '/', pathMatch: 'full'},
  { path: 'usuarios', component: UsuarioMainComponent},
  /*{ path: 'productos', component: ProductoMainComponent},
  { path: 'usuarios/:id', component: UsuarioCardComponent},
  { path: 'productos/:id', component:ProductoCardComponent},*/
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
  { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
