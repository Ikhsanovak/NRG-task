import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {PhotosActionsEnum, PhotosLoadedError, PhotosLoadedSuccess} from '../actions/photos.actions';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';
import {PhotosApiService} from '../../services/photos-api.service';

@Injectable()
export class PhotosEffects {

  @Effect()
  loadPhotos$ = this.actions$
    .pipe(
      ofType(PhotosActionsEnum.LoadPhotos),
      mergeMap(() => this.photosApiService.getPhotos().pipe(
        map(photos => (new PhotosLoadedSuccess({photos}))),
        catchError(() => of(new PhotosLoadedError())
        ))
      )
    );

  constructor(
    private actions$: Actions,
    private photosApiService: PhotosApiService,
  ) {
  }
}
