import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { MatCardModule } from '@angular/material/card';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule, CoreRoutingModule, MatCardModule, FormsModule, ReactiveFormsModule
  ],
  exports: [LoginComponent, RegisterComponent]
})
export class CoreModule { }
