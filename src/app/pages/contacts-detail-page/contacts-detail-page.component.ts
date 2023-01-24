import { Component, OnInit } from '@angular/core';
// el contenido que hay en la URL
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrls: ['./contacts-detail-page.component.css']
})
export class ContactsDetailPageComponent implements OnInit{
  // el id que se captura
  id: any | undefined;
  contacto: IContacto = {
    id: 0,
    nombre: '',
    apellidos: '',
    email: '',
    genero: 'mujer'
  };
  filtroPrevio: string = 'todos';
  constructor (private route: ActivatedRoute){
  }
  ngOnInit(): void {
// vamos a leer los parametros
this.route.params.subscribe(

  (params: any) => {
    if(params.id){
      this.id = params.id;
    }
  }
);
// acceder a los parametros del padre
// this.route.parent?.params
// vamos a leer tambien del state del contacto
if (history.state.data) {
  this.contacto = history.state.data;
}
if (history.state.filtro) {
  this.filtroPrevio = history.state.filtro;
}
  }
}
