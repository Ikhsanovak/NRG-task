import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';
import {MatButtonModule, MatCardModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [DashboardComponent, CardComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    MatCardModule,
    ScrollingModule,
    MatButtonModule
  ]
})
export class DashboardModule { }
