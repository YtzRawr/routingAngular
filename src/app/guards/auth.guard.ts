import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
// canactive requiere de una funcion 
export class AuthGuard implements CanActivate {
  constructor(private router: Router){
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      // return truee --> se carga la ruta
      // false --> no se carga
      let token = sessionStorage.getItem('token');

      if (token) {
        return true
      }else{
        // deberia de redirigir a la pagina de login
        this.router.navigate(['login']);
        return false;
      }
  }
  
}
