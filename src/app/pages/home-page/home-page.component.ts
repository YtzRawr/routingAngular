import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit{
  data:any;

  constructor(private router: Router){}
  ngOnInit(): void {
    // navigate
    // this.data = this.route.snapshot.data;
  }
  navegarAContacts(): void {
      // this.router.navigate('contacts');
  }

}
