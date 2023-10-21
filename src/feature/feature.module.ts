import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule, FeatureRoutingModule
  ]
})
export class FeatureModule { }
