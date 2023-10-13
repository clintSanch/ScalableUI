import { Component, OnInit } from '@angular/core';
import { MainDirective } from './main.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ScalableUI';

  constructor( ){}

  async ngOnInit(){}

  loadComponent(){}
}
