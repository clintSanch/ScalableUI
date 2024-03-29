import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { HeaderDirective } from './header.directive';
import { RegisterComponent } from 'src/core/components/register/register.component';
import { LoginComponent } from 'src/core/components/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{

  constructor(private resolver: ComponentFactoryResolver, private viewComponentRef: ViewContainerRef){}

  @ViewChild(HeaderDirective, { static: true}) appHeader!: HeaderDirective

  async ngOnInit(){}

  loadRegisterComponents(){}

  loadLoginComponent(){}

}
