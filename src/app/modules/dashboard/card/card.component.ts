import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from '../../../models/photo-model';
import {MatDialog} from '@angular/material';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {Store} from '@ngrx/store';
import * as fromRoot from '../../../store/reducers';
import * as PhotosActions from '../../../store/actions/photos.actions';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  photo: PhotoModel;

  constructor(
    public dialog: MatDialog,
    private store: Store<fromRoot.State>
  ) { }

  ngOnInit() {
  }

  openDialog(photo: PhotoModel) {
    this.store.dispatch(new PhotosActions.SelectPhoto({id: photo.id}));
    this.dialog.open(CardDialogComponent, {
      data: photo
    });
  }

  edit(event) {
    event.stopPropagation();
    console.log('edit');
  }

  delete(event) {
    event.stopPropagation();
    console.log('delete');
  }
}
