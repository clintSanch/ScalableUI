import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { ProductComponent } from './components/product/product.component';
import { GeolocationService } from 'src/shared/services/geolocation.service';
import { MatCardModule } from '@angular/material/card';
import { FeatureService } from './services/feature.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule, FeatureRoutingModule, MatCardModule, HttpClientModule
  ]
})
export class FeatureModule { }
