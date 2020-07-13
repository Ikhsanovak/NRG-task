import {PhotoModel} from '../../models/photo-model';
import {PhotosActionsEnum, PhotosActionTypes} from '../actions/photos.actions';

export interface PhotosState {
  photos: PhotoModel[];
  selectedPhoto: PhotoModel;
  selectedPhotoId: number;
  loading: boolean;
}

export const initialState: PhotosState = {
  photos: [],
  selectedPhoto: {
    id: null,
    title: null,
    albumId: null,
    thumbnailUrl: null,
    url: null
  },
  selectedPhotoId: null,
  loading: false,
};

export function photosReducer(state: PhotosState = initialState, action: PhotosActionTypes) {
  switch (action.type) {
    case PhotosActionsEnum.LoadPhotos:
      return {
        ...state,
        loading: true
      };
    case PhotosActionsEnum.PhotosLoadedSuccess:
      return {
        ...state,
        photos: action.payload.photos,
        loading: false
      };
    case PhotosActionsEnum.PhotosLoadedError:
      return {
        ...state,
        photos: [],
        loading: false
      };
    case PhotosActionsEnum.SELECT_PHOTO:
      return {
        ...state,
        // selectedPhoto: action.payload.photo,
        selectedPhotoId: action.payload.id,
      };
    default:
      return state;
  }
}

export const getSelected = (state: PhotosState) => state.selectedPhoto;
export const getPhotos = (state: PhotosState) => state.photos;



