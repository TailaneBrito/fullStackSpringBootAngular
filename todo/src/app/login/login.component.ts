import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = "KMnoS"
  password = "123"

  errorMessage = "Invalid Credentials"
  invalidLogin = false

  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username)
    if (this.username==="KMnoS" && this.password==="123"){
      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }

    console.log(this.invalidLogin)
  }

}
