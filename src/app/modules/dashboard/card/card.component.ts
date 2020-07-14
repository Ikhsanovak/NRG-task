import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from '../../../models/photo-model';
import {MatDialog, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';
import {CardDialogComponent} from '../card-dialog/card-dialog.component';
import {Store} from '@ngrx/store';
import * as PhotosActions from '../../../store/actions/photos.actions';
import {State} from '../../../store/reducers';
import {DialogEditTitleComponent} from '../dialog-edit-title/dialog-edit-title.component';
import * as index from '../../../store/reducers';
import {Observable} from 'rxjs';

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

  public photo$: Observable<PhotoModel>;

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private store: Store<State>
  ) { }

  ngOnInit() {
  }

  openDialog(photo: PhotoModel) {
    this.store.dispatch(new PhotosActions.SelectPhoto({id: photo.id}));
    this.photo$ = this.store.select(index.selectCurrentPhoto);
    this.dialog.open(CardDialogComponent, {
      data: photo,
      panelClass: 'custom-card-dialog'
  });
  }

  edit(event, photo: PhotoModel) {
    event.stopPropagation();
    this.dialog.open(DialogEditTitleComponent, {
      data: photo,
      width: '500px'
    });
  }

  delete(event, id: number) {
    event.stopPropagation();
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
