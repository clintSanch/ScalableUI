import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appHeader]'
})
export class HeaderDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
