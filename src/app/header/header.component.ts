import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, AfterViewInit } from '@angular/core';
import { HeaderDirective } from './header.directive';
import { RegisterComponent } from 'src/core/components/register/register.component';
import { LoginComponent } from 'src/core/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit{

  constructor(private resolver: ComponentFactoryResolver, private viewComponentRef: ViewContainerRef){}

  @ViewChild(HeaderDirective, { static: true}) appHeader!: HeaderDirective

  async ngOnInit(){}

  async ngAfterViewInit() {}

  loadRegisterComponents(){}

  loadLoginComponent(){}

}
