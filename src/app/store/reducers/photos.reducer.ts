import {PhotoModel} from '../../models/photo-model';
import {PhotosActionsEnum, PhotosActionTypes} from '../actions/photos.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export interface PhotosState extends EntityState<PhotoModel> {
  selectedPhotoId: number;
  loading: boolean;
  error: boolean;
}

export function selectedPhotoId(a: PhotoModel): number {
  return a.id;
}

export const adapter: EntityAdapter<PhotoModel> =
  createEntityAdapter<PhotoModel>({
    selectId: selectedPhotoId,
  });


export const initialPhotosState: PhotosState = adapter.getInitialState({
  selectedPhotoId: null,
  loading: false,
  error: false
});

export function photosReducer(state: PhotosState = initialPhotosState, action: PhotosActionTypes): PhotosState {
  switch (action.type) {
    case PhotosActionsEnum.LoadPhotos:
      return {
        ...state,
        loading: true,
        error: false
      };
    case PhotosActionsEnum.PhotosLoadedSuccess:
      return adapter.addMany(action.payload.photos, {...state, loading: false});
    case PhotosActionsEnum.PhotosLoadedError:
      return {
        ...state,
        loading: false,
        error: true
      };
    case PhotosActionsEnum.DeletePhoto:
      return adapter.removeOne(action.payload.id, state);
    case PhotosActionsEnum.SelectPhoto:
      return {
        ...state,
        selectedPhotoId: action.payload.id,
      };
    case PhotosActionsEnum.EditPhoto:
      return adapter.updateOne(action.payload.update, {...state, selectedPhotoId: action.payload.id});
    default:
      return state;
  }
}

export const getSelectedPhotoId = (state: PhotosState) => state.selectedPhotoId;
export const getErrorLoadingStatus = (state: PhotosState) => state.error;
export const getLoadingStatus = (state: PhotosState) => state.loading;

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();

export const selectPhotosEntities = selectEntities;


