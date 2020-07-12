import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';
import {MatButtonModule, MatCardModule, MatDialogModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { CardComponent } from './card/card.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';

@NgModule({
  declarations: [DashboardComponent, CardComponent, CardDialogComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    MatCardModule,
    ScrollingModule,
    MatButtonModule,
    MatDialogModule
  ],
  entryComponents: [CardDialogComponent]
})
export class DashboardModule { }
