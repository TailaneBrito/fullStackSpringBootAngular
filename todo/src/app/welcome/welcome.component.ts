import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  message = 'Some welcome Message '
  username = ''

  //constructor
  //Activate Route
  constructor(private route:ActivatedRoute) {

   }

  //method 
  ngOnInit(){

    console.log(this.message)
    //console.log(this.route.snapshot.params['name'])
    this.username = this.route.snapshot.params['name'];
  }

}
