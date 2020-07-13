import {Action} from '@ngrx/store';
import {PhotoModel} from '../../models/photo-model';

export enum PhotosActionsEnum {
  LoadPhotos = '[Dashboard Page] Load Photos',
  PhotosLoadedSuccess = '[Articles Page] Articles Loaded Success',
  PhotosLoadedError = '[Articles Page] Articles Loaded Error',
  DELETE_PHOTO = '[Dashboard Page] Delete Photo',
  EDIT_PHOTO = '[Dashboard Page] Edit Photo',
  SELECT_PHOTO = '[Dashboard Page] Select Photo'
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
  readonly type = PhotosActionsEnum.DELETE_PHOTO;

  constructor(public payload: { id: number }) { }
}

export class EditPhoto implements Action {
  readonly type = PhotosActionsEnum.EDIT_PHOTO;

  constructor(public payload: PhotoModel) { }
}

export class SelectPhoto implements Action {
  readonly type = PhotosActionsEnum.SELECT_PHOTO;

  constructor(public payload: { id: number }) { }
}

export type PhotosActionTypes = LoadPhotos | PhotosLoadedSuccess | PhotosLoadedError | DeletePhoto | EditPhoto | SelectPhoto;
