import {PhotoModel} from '../../models/photo-model';
import {PhotosActionsEnum, PhotosActionTypes} from '../actions/photos.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface PhotosState extends EntityState<PhotoModel> {
  selectedPhoto: PhotoModel;
  selectedPhotoId: number;
  loading: boolean;
}

export function selectedPhotoId(a: PhotoModel): number {
  return a.id;
}

export const adapter: EntityAdapter<PhotoModel> =
  createEntityAdapter<PhotoModel>({
    selectId: selectedPhotoId,
  });


export const initialPhotosState: PhotosState = adapter.getInitialState({
  selectedPhoto: {
    id: null,
    title: null,
    albumId: null,
    thumbnailUrl: null,
    url: null
  },
  selectedPhotoId: null,
  loading: false,
});

export function photosReducer(state: PhotosState = initialPhotosState, action: PhotosActionTypes): PhotosState {
  switch (action.type) {
    case PhotosActionsEnum.LoadPhotos:
      return {
        ...state,
        loading: true
      };
    case PhotosActionsEnum.PhotosLoadedSuccess:
      return adapter.addMany(action.payload.photos, {...state, loading: false});
    case PhotosActionsEnum.PhotosLoadedError:
      return {
        ...state,
        loading: false
      };
    case PhotosActionsEnum.DeletePhoto:
      return adapter.removeOne(action.payload.id, state);
    case PhotosActionsEnum.SelectPhoto:
      return {
        ...state,
        selectedPhoto: action.payload.photo,
        selectedPhotoId: action.payload.photo.id,
      };
    default:
      return state;
  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();


