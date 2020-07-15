import {ChangeDetectionStrategy, Component, Inject, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import * as index from '../../../store/reducers';
import {PhotoModel} from '../../../models/photo-model';
import {MAT_DIALOG_DATA, MatDialogRef, MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material';
import {Store} from '@ngrx/store';
import {EditPhoto} from '../../../store/actions/photos.actions';

@Component({
  selector: 'app-dialog-edit-title',
  templateUrl: './dialog-edit-title.component.html',
  styleUrls: ['./dialog-edit-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DialogEditTitleComponent implements OnInit {

  public titleFormControl = new FormControl();

  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private store: Store<index.State>,
    public dialogRef: MatDialogRef<DialogEditTitleComponent>,
    private _snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public photo: PhotoModel
  ) { }

  ngOnInit() {
    this.titleFormControl = new FormControl(this.photo.title, [
      Validators.required
    ]);
  }

  public updateTitle() {
    this.photo.title = this.titleFormControl.value;
    this.store.dispatch(new EditPhoto({id: this.photo.id, update: {id: this.photo.id, changes: this.photo}}));
    this.dialogRef.close();
    this.openSnackBar(`Title of item ${this.photo.id} was edited`, '');
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
