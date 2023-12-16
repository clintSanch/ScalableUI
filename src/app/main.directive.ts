import { AfterViewInit, Directive, ElementRef, Renderer2, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appMain]'
})
export class MainDirective implements AfterViewInit {

    constructor(
        private _templateRef: TemplateRef<any>, 
        private _elementRef: ElementRef<HTMLElement>, 
        public _viewContainerRef: ViewContainerRef, 
        private _renderer: Renderer2) { }

    performSomeTasks() {
        this._renderer.listen(this._viewContainerRef.get(2), 'click', () => { })
    }

    ngAfterViewInit(): void {
        this.performSomeTasks()
    }

}
