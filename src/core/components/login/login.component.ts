import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { User } from 'src/objectModels/user';
import { State, Store, createSelector, createFeatureSelector, createReducer } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  component_title = 'Login';

  ngOnInit(): void {
      
  }

  constructor(private authservice: AuthService, private store: Store){}


  onSubmit(){}

  handleUser(value: string){
  }
  handlePass(passValue: string){
  }

}
