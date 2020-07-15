import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    PageLayoutModule
  ]
})
export class AboutModule { }
