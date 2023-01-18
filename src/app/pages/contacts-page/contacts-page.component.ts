import { Component, OnInit } from '@angular/core';
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
    email: 'matias@gmail.com'
  },
  {
    id: 1,
    nombre: 'Ignacio',
    apellidos: 'Pizarro',
    email: 'ignacio@gmail.com'
  },
  {
    id: 2,
    nombre: 'Juan',
    apellidos: 'Pizarro',
    email: 'juan@gmail.com'
  }

]

  constructor (){}
  ngOnInit(): void {
  }

}
