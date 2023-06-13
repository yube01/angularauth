import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm!:FormGroup


  constructor(private formBuilder:FormBuilder){


    this.registerForm = this.formBuilder.group({
      email:formBuilder.control('',[Validators.required,Validators.email,Validators.minLength(5)]),
      password:formBuilder.control('',[Validators.required,Validators.minLength(5)]),


    })

  }




}
