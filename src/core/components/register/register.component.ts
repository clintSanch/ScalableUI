import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/core/services/auth.service';
import { PushPipe } from '@ngrx/component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  component_title = 'Register';

  constructor(private fb: FormBuilder, private authService: AuthService){}

  registerProfile = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    userName: [],
    email: [],
    mobile: [],
    password: []
  });

  onSubmit(){}

}
