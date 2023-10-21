import { Component, Input } from '@angular/core';
import { AuthService } from 'src/core/services/auth.service';
import { User } from 'src/objectModels/user';
import { State, Store, createSelector, createFeatureSelector, createReducer } from '@ngrx/store';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  component_title = 'Login';

  constructor(private authservice: AuthService, private store: Store){}

  @Input()
  inputUser_name : User = '';

  @Input()
  inputPassword : User = '';

  onSubmit(){}

  handleUser(value: string){
    this.inputUser_name = value;
  }
  handlePass(passValue: string){
    this.inputPassword = passValue;
  }

}
