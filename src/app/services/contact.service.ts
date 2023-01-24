import { Injectable } from '@angular/core';
import { LISTA_CONTACTOS } from '../mock/contacts.mock';
import { IContacto } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

listaContactos: IContacto[] = LISTA_CONTACTOS;
  constructor() { }

obtenerContactos(genero?:string): Promise<IContacto[]>{
    if (genero == 'hombre' || genero == 'mujer') {
      let listaFiltrada: IContacto[] = this.listaContactos.filter((contacto) => contacto.genero == genero );
      return Promise.resolve(listaFiltrada);
    }else if (genero == 'todos'){
      return Promise.resolve(this.listaContactos);
    }else{
      return Promise.reject('filtro no valido');
    }
  }
}
