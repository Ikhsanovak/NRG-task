import {ChangeDetectionStrategy, Component, Inject, Input, OnInit} from '@angular/core';
import {PhotoModel} from '../../../models/photo-model';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Store} from '@ngrx/store';
import * as index from '../../../store/reducers';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardDialogComponent implements OnInit {


  constructor(
    private store: Store<index.State>,
    @Inject(MAT_DIALOG_DATA) public photo: PhotoModel
  ) { }

  ngOnInit() {
  }

}
