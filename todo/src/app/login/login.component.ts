import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "KMnoS"
  password = ""

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username)
  }

}