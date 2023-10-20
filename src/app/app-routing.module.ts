import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'header', component: HeaderComponent},
  { path: 'footer', component: FooterComponent},
  { path: 'core', loadChildren: ()=> import('../core/core.module').then(module => module.CoreModule)},
  { path: 'feature', loadChildren: ()=> import('../feature/feature.module').then(module => module.FeatureModule)},
  { path: 'shared', loadChildren: ()=> import('../shared/shared.module').then(module => module.SharedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
