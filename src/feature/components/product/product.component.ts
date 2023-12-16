import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/objectModels/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

    @Output() somethig = new EventEmitter()

    product : Product[] = [];
}
