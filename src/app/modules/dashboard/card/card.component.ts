import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from '../../../models/photo-model';
import {MatDialog} from '@angular/material';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  photo: PhotoModel;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openDialog(photo: PhotoModel) {
    this.dialog.open(CardDialogComponent, {
      data: photo
    });
  }

}
