import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {PhotosApiService} from '../../services/photos-api.service';
import {Observable} from 'rxjs';
import {PhotoModel} from '../../models/photo-model';
import {Store} from '@ngrx/store';
import * as index from '../../store/reducers';
import {LoadPhotos} from '../../store/actions/photos.actions';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  public photos$: Observable<PhotoModel[]>;
  public isLoadingError$: Observable<boolean>;
  public isLoading$: Observable<boolean>;

  constructor(
    private photosApiService: PhotosApiService,
    private store: Store<index.State>
  ) { }

  ngOnInit() {
    this.store.dispatch(new LoadPhotos());
    this.isLoading$ = this.store.select(index.selectLoadingStatus);
    this.isLoadingError$ = this.store.select(index.selectErrorLoadingStatus);
    this.photos$ = this.store.select(index.getAllPhotos);
  }
}
