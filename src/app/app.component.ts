import { Component, ElementRef, OnInit, QueryList, Renderer2, TemplateRef, ViewChild, ViewChildren, ViewContainerRef } from '@angular/core';
import { MainDirective } from './main.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ScalableUI';
  
  @ViewChild('viewcontainer', {'read': ViewContainerRef}) viewcontainer: any;
  @ViewChild(TemplateRef) template: TemplateRef<null> | undefined;
  @ViewChildren('child', { 'read': ElementRef}) childComponent: QueryList<ElementRef> | undefined;

  
  constructor( private renderer: Renderer2, private host: ElementRef){}

  async ngOnInit(){}

  loadComponent(){}
}
