import { Component, enableProdMode, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';
import { AuthService } from './../../services/auth.service';

enableProdMode();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup({
  email: new FormControl(),
    password: new FormControl()
  });

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  login (){
      return this.authService.login(this.LoginForm.value).subscribe(res => console.log(res));
  }

}
