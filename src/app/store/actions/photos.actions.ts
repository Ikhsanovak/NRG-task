import {Action} from '@ngrx/store';
import {PhotoModel} from '../../models/photo-model';
import {Update} from '@ngrx/entity';

export enum PhotosActionsEnum {
  LoadPhotos = '[Dashboard Page] Load Photos',
  PhotosLoadedSuccess = '[Dashboard Page] Photos Loaded Success',
  PhotosLoadedError = '[Dashboard Page] Photos Loaded Error',
  DeletePhoto = '[Dashboard Page] Delete Photo',
  EditPhoto = '[Dashboard Page] Edit Photo Title',
  SelectPhoto = '[Dashboard Page] Select Photo'
}

export class LoadPhotos implements Action {
  readonly type = PhotosActionsEnum.LoadPhotos;
}

export class PhotosLoadedSuccess implements Action {
  readonly type = PhotosActionsEnum.PhotosLoadedSuccess;

  constructor(public payload: {photos: PhotoModel[]}) { }
}

export class PhotosLoadedError implements Action {
  readonly type = PhotosActionsEnum.PhotosLoadedError;
}

export class DeletePhoto implements Action {
  readonly type = PhotosActionsEnum.DeletePhoto;

  constructor(public payload: { id: number }) { }
}

export class EditPhoto implements Action {
  readonly type = PhotosActionsEnum.EditPhoto;

  constructor(public payload: { id: number, update: Update<PhotoModel> }) { }
}

export class SelectPhoto implements Action {
  readonly type = PhotosActionsEnum.SelectPhoto;

  constructor(public payload: { id: number }) { }
}

export type PhotosActionTypes = LoadPhotos | PhotosLoadedSuccess | PhotosLoadedError |
  DeletePhoto | EditPhoto | SelectPhoto;
