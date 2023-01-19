import { Component, OnInit } from '@angular/core';
import {  NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  token: string | null = null;
  contactoSeleccionado : IContacto | undefined;
  data:any;
// se inyecta el router en el constructor
  constructor(private router: Router){}
  ngOnInit(): void {
    //comprobar si existe el token en el sessionstorage
    this.token = sessionStorage.getItem('token') ;

    // navigate
    // this.data = this.route.snapshot.data;
    // leemos el estado del historial de la navegacion
    if (history.state.data) {
      console.log(history.state.data);
      this.contactoSeleccionado = history.state.data;
    }
    console.log(history.state.data);
  }
  navegarAContacts(): void {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        // order: ''
        genero: 'masculino'
      }
    }
      this.router.navigate(['contacts'], navigationExtras);
  }

}
