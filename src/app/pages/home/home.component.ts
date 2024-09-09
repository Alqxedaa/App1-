import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  implements OnInit {

  nombre : string;

  constructor() { }

  ngOnInit() {}
  saludar(){
    console.log("Hola"+ this.nombre);
  }

}
