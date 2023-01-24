import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IContacto } from 'src/app/models/contact.interface';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contacts-page',
  templateUrl: './contacts-page.component.html',
  styleUrls: ['./contacts-page.component.css']
})
export class ContactsPageComponent  implements OnInit{

  // la lista deberia de estar desde otro servicio
//   listaContactos: IContacto [] = [
//     {
//     id: 0,
//     nombre: 'Matias',
//     apellidos: 'Pizarro',
//     email: 'matias@gmail.com',
//     genero: 'masculino'
//   },
//   {
//     id: 1,
//     nombre: 'Ignacio',
//     apellidos: 'Pizarro',
//     email: 'ignacio@gmail.com',
//     genero: 'masculino'
//   },
//   {
//     id: 2,
//     nombre: 'Juan',
//     apellidos: 'Pizarro',
//     email: 'juan@gmail.com',
//     genero: 'masculino'
//   },
//   {
//     id: 3,
//     nombre: 'Catalina',
//     apellidos: 'Pizarro',
//     email: 'catalina@gmail.com',
//     genero: 'femenino'
//   }
// ]
filtroGenero: string = 'todos';
listaContactos: IContacto[] = [];
  constructor (private router: Router, private route: ActivatedRoute, private contactService: ContactService){}
  ngOnInit(): void {

// obtenemos los queryparams
this.route.queryParams.subscribe((params: any) =>{
  console.log('QueryParams: ',params.genero);
  this.filtroGenero = params.genero;
  // obtener la lista de contactos
  if (params.genero) {
    this.filtroGenero = params.genero
  }
  this.contactService.obtenerContactos(this.filtroGenero)
  .then(
    (lista) => this.listaContactos = lista
    ).catch((error)=> console.error(`Ha habido un error al obtener los contactos: ${error}`))
    .finally(() => console.info('Peticion de contactos terminada'))
    
});


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
