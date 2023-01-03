import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsDetailPageComponent } from './pages/contacts-detail-page/contacts-detail-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';


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
  //  rutas hijas de home
   children:[
    {
      // home/hijo --> HomePageComponent
      path: 'homehijo',
      component: HomePageComponent
    }
   ]
  },

 {
  path: 'contacts',
  component: ContactsPageComponent
 },
//  {
//   // -> pasar parametros por ruta
//   path: 'contacts/:id',
//   component: ContactsPageComponent 
  
//  },
//  {
//   // --> pasar parametros por ruta
//   path: 'contacts/:id',
//   component: ContactsDetailPageComponent 
//  }

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
