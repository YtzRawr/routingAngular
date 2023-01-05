import { Component, OnInit } from '@angular/core';
import { LibrosService } from './services/libros.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routerNavegacion';
  // lista los datos que estarian insertados
  librosList: any[] = [];


  constructor(private librosService: LibrosService){
    console.log('El componente se a creado con exito!');
  }
  ngOnInit(): void {
    console.log('El componente se a inicializado');
    this.librosService.getLibros()
    // any?
      .subscribe((response: any[]) => this.librosList = response);
    
  } 

}
