import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
// resolver
import { Resolve } from '@angular/router';
import { HomeResolver } from './home.resolver';
import { AuthGuard } from './guards/auth.guard';

// conjunto de rutas que podemos navegar dentro de la app 
const routes: Routes = [
  {
    // pagina de inicio que se cargara de localhost 4200
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    // donde se quiere navegar
  path: 'login',
  component: LoginPageComponent
 },
  {
     // donde se quiere navegar
   path: 'home',
   component: HomePageComponent,
   resolve: {
    message: HomeResolver
   },
  //  rutas hijas de home
   children:[
    {
      // home/hijo --> HomePageComponent
      path: 'homehijo',
      component: HomePageComponent
    }
   ],
  //  de la ruta home
   canActivate: [AuthGuard]
  },

 {
  path: 'contacts',
  component: ContactsPageComponent,
  // se concatenan con comas
  canActivate: [ AuthGuard]

 },
//  {
//   // -> pasar parametros por ruta
//   path: 'contacts/:id',
//   component: ContactsPageComponent 
  
//  },
 {
  // --> pasar parametros por ruta
  path: 'contacts/:id',
  component: ContactsDetailPageComponent,
  canActivate: [AuthGuard]
 },

{
  path: '**',
  component:NotFoundPageComponent
}
 
];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
