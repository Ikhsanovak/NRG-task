import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MOCK_PHOTOS} from '../test/mock-data/mock-photos';
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

  constructor(
    private photosApiService: PhotosApiService,
    private store: Store<index.State>
  ) { }

  ngOnInit() {
    this.photos$ = this.store.select(index.getAllPhotos);
    this.store.dispatch(new LoadPhotos());

    this.store.subscribe(state => console.log(state));
  }
}
