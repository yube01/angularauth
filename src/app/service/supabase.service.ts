import { Injectable } from '@angular/core';
import { SupabaseClient } from '@supabase/supabase-js';


@Injectable({
  providedIn: 'root'
})
export class SupabaseService {

  private supabase_client = SupabaseClient

  constructor() {

  }


}
