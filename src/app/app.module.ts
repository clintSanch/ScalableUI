import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideClientHydration } from '@angular/platform-browser';

import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MatCardModule } from '@angular/material/card'

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainDirective } from './main.directive';
import { HeaderDirective } from './header/header.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,  
  ],
  imports: [
    BrowserModule,
    CoreModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
    MatCardModule
  ],
  providers: [ provideClientHydration(), ],
  bootstrap: [AppComponent]
})
export class AppModule { }
