import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SupabaseService } from 'src/app/service/supabase.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!:FormGroup


  constructor(private formBuilder:FormBuilder,private supaService:SupabaseService,private router:Router){


    this.loginForm = this.formBuilder.group({
      email:formBuilder.control('',[Validators.required,Validators.email,Validators.minLength(5)]),
      password:formBuilder.control('',[Validators.required,Validators.minLength(5)]),


    })

  }

  public onSubmit(){

    this.supaService.signUp(this.loginForm.value.email,this.loginForm.value.password).then((res)=>{
      console.log(res)
      if(res.data.user!.role === "authenticated"){
        this.router.navigate(['/dashboard'])
      }

    }
  ).catch((error)=>
    console.log(error))

  }

}
