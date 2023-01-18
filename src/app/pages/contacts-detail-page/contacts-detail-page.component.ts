import { Component, OnInit } from '@angular/core';
// el contenido que hay en la URL
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-contacts-detail-page',
  templateUrl: './contacts-detail-page.component.html',
  styleUrls: ['./contacts-detail-page.component.css']
})
export class ContactsDetailPageComponent implements OnInit{
  // el id que se captura
  id: any | undefined;
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
)
  }
}
