import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent  implements OnInit{

  listaContactos: IContacto [] = [
    {
    id: 0,
    nombre: 'Matias',
    apellidos: 'Pizarro',
    email: 'matias@gmail.com',
    genero: 'masculino'
  },
  {
    id: 1,
    nombre: 'Ignacio',
    apellidos: 'Pizarro',
    email: 'ignacio@gmail.com',
    genero: 'masculino'
  },
  {
    id: 2,
    nombre: 'Juan',
    apellidos: 'Pizarro',
    email: 'juan@gmail.com',
    genero: 'masculino'
  }

]

  constructor (private router: Router){}
  ngOnInit(): void {
  }

  // paso de informacion entre componentes a traves del ESTADO
  volverAHome(contacto: IContacto){
    let navigationExtras: NavigationExtras = {
      // queryparams pasar info de consulta
      state: {
        data:contacto
      }
    }
    this.router.navigate(['/home'], navigationExtras);
  }

}
