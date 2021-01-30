import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

//decorator = java annotation.
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

//classes
export class WelcomeComponent implements OnInit {

  //member variables.
  message = 'Some welcome Message'

  //constructor
  constructor() {


   }

  //method 
  ngOnInit(){

    console.log(this.message)
  }

}
