import { Component, OnInit } from '@angular/core';
import {Login} from './login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: Login = new Login('', '' );

  constructor() { }

  ngOnInit() {
  }

  sendForm() {
    console.log(JSON.stringify(this.loginForm));
  }
}
