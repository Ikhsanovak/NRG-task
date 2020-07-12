import {Component, Inject, Input, OnInit} from '@angular/core';
import {PhotoModel} from '../../../models/photo-model';
import {MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-card-dialog',
  templateUrl: './card-dialog.component.html',
  styleUrls: ['./card-dialog.component.scss']
})
export class CardDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public photo: PhotoModel) { }

  ngOnInit() {
  }

}
