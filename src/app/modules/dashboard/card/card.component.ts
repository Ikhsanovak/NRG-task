import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from '../../../models/photo-model';
import {MatDialog, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {Store} from '@ngrx/store';
import * as PhotosActions from '../../../store/actions/photos.actions';
import {State} from '../../../store/reducers';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  photo: PhotoModel;

  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private store: Store<State>
  ) { }

  ngOnInit() {
  }

  openDialog(photo: PhotoModel) {
    this.store.dispatch(new PhotosActions.SelectPhoto({photo}));
    this.dialog.open(CardDialogComponent, {
      data: photo
    });
  }

  edit(event) {
    event.stopPropagation();
    console.log('edit');
  }

  delete(event, id: number) {
    event.stopPropagation();
    console.log('delete');
    this.store.dispatch(new PhotosActions.DeletePhoto({id}));
    this.openSnackBar(`Item ${id} was deleted`, '');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }
}
