import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { LibrosService } from './services/libros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routerNavegacion';
  token: string | null = null;
  // lista los datos que estarian insertados
  librosList: any[] = [];


  constructor(private router: Router){
    // console.log('El componente se a creado con exito!');
  }
  ngOnInit(): void {
    this.token = sessionStorage.getItem('token');
    // console.log('El componente se a inicializado');
    // this.librosService.getLibros()
    // any?
      // .subscribe((response: any[]) => this.librosList = response);
    
  } 

  logout(){
    sessionStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
// 1 A traves de inputs y outputs
// 2 A traves de inyeccion de constructores de componentes hijos @ViewChild, @ContentChild o @ContentChilden
// 3 A traves de servicios (Promesas y observables, etc ) --> NGRX (Gestion del estado de la aplicacion)
// 4 A traves de parametros entre rutas 