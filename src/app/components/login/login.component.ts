import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!:FormGroup


  constructor(private formBuilder:FormBuilder){


    this.loginForm = this.formBuilder.group({
      email:formBuilder.control('',[Validators.required,Validators.email,Validators.minLength(5)]),
      password:formBuilder.control('',[Validators.required,Validators.minLength(5)]),


    })

  }

}
