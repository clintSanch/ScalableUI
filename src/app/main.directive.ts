import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMain]'
})
export class MainDirective {

  constructor( public viewContainerRef: ViewContainerRef) { }

}
