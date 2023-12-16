import { AfterViewInit, ComponentRef, Directive, ElementRef, Input, OnDestroy, OnInit, Renderer2, TemplateRef, ViewChild, ViewContainerRef } from "@angular/core";

/**Contains Rendering logic to the Login && Register components Presentation layers */

@Directive({ selector: '[coreDom]' })
export class DomDirective implements OnInit, AfterViewInit {


    @Input('coreDom') coreDom!: {};
    @Input() firstname!: string;
    @Input() lastname!: string;
    @Input() user!: string;
    @Input() email!: string;
    @Input() mobile!: number;
    @Input() password!: string;
    componentReference!: ComponentRef<any>

    constructor(private _element: ElementRef<HTMLElement>, private template: TemplateRef<object>, private _renderer: Renderer2, private _viewContainerRef: ViewContainerRef) { }

    ngOnInit(): void {
        this.performTasks()
    }
    ngAfterViewInit(): void { }

    performTasks() {
        this._renderer.listen(this._element.nativeElement, 'click', () => {
            let currentElement = this._element.nativeElement;
        });
    }
}
