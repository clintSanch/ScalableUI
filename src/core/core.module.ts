import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule} from '@angular/material/form-field'
import { MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './services/auth.service';
import { StoreModule } from '@ngrx/store';
import { FeatureService } from 'src/feature/services/feature.service';
import { SharedService } from 'src/shared/services/shared.service';
import { GeolocationService } from 'src/shared/services/geolocation.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule, CoreRoutingModule, MatCardModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, HttpClientModule
  ],
  providers: [AuthService],
  exports: [LoginComponent, RegisterComponent]
})
export class CoreModule { }
