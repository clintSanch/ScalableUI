import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedRoutingModule } from './shared-routing.module';
import { LoggerService } from './services/logger.service';
import { SharedService } from './services/shared.service'

@NgModule({
  declarations: [],
  imports: [
    CommonModule, SharedRoutingModule,
  ],
  providers: [LoggerService, SharedService]
})
export class SharedModule { }
