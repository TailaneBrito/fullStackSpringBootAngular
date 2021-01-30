import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ErrorComponent } from '../error/error.component';

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

  constructor(private router: Router) { 
    
  }

  ngOnInit(): void {
  }

  handleLogin(){
    // console.log(this.username)
    if (this.username==="KMnoS" && this.password==="123"){

      this.router.navigate(['welcome', this.username])

      this.invalidLogin = false
    }else{
      this.invalidLogin = true
    }

    console.log(this.invalidLogin)
  }

}
