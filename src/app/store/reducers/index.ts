import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import * as PhotosReducer from './photos.reducer';

export interface State {
  photos: PhotosReducer.PhotosState;
}

export const reducers: ActionReducerMap<State> = {
  photos: PhotosReducer.photosReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const getPhotosState = createFeatureSelector<PhotosReducer.PhotosState>('photos');

export const getAllPhotos = createSelector(
  getPhotosState,
  PhotosReducer.selectAll,
);

export const selectPhotosEntities = createSelector(
  getPhotosState,
  PhotosReducer.selectPhotosEntities
);

export const selectCurrentPhotoId = createSelector(
  getPhotosState,
  PhotosReducer.getSelectedPhotoId
);

export const selectCurrentPhoto = createSelector(
  selectPhotosEntities,
  selectCurrentPhotoId,
  (photoEntities, photoId) => photoEntities[photoId]
);
