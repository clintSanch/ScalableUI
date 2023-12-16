import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { MainDirective } from './main.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit{
  title = 'ScalableUI';
  
  @ViewChild('viewcontainer', {'read': ViewContainerRef}) viewcontainer: any;
  @ViewChild("") template!: TemplateRef<any>;
  @ViewChildren(MainDirective) viewChildren!: QueryList<MainDirective>;

  
  constructor( private renderer: Renderer2, private host: ElementRef){}


    ngAfterViewInit(): void { throw new Error('Method not implemented.');}

    ngOnInit(){}

    loadComponent(){}
}
