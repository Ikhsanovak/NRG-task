import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {PageLayoutModule} from '../page-layout/page-layout.module';
import {MatButtonModule, MatCardModule, MatDialogModule, MatFormFieldModule, MatSnackBarModule} from '@angular/material';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {ScrollingModule as ExperimentalScrollingModule} from '@angular/cdk-experimental/scrolling';
import { CardComponent } from './card/card.component';
import { CardDialogComponent } from './card-dialog/card-dialog.component';
import {MatInputModule} from '@angular/material';
import { DialogEditTitleComponent } from './dialog-edit-title/dialog-edit-title.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  declarations: [DashboardComponent, CardComponent, CardDialogComponent, DialogEditTitleComponent],
  imports: [
    CommonModule,
    PageLayoutModule,
    MatCardModule,
    ScrollingModule,
    MatButtonModule,
    MatDialogModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    ExperimentalScrollingModule,
    FlexLayoutModule
  ],
  entryComponents: [CardDialogComponent, DialogEditTitleComponent]
})
export class DashboardModule { }
