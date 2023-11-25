import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from 'src/core/services/auth.service';
import { PushPipe } from '@ngrx/component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{

  component_title = 'Register';

  ngOnInit(): void {
      
  }

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
