import { Injectable } from '@angular/core';
import { AuthSession, SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from 'src/environments/environment.development';



@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase: SupabaseClient
  _session: AuthSession | null = null

  constructor() {
    this.supabase = createClient(environment.supabaseurl,environment.supabasekey)
  }


  //register
  signUp(email:string, password:string){
return this.supabase.auth.signUp({email,password})

  }

  //login
  signIn(email:string, password:string){
    return this.supabase.auth.signInWithPassword({email,password})
  }




}
