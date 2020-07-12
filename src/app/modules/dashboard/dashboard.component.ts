import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {MOCK_PHOTOS} from '../test/mock-data/mock-photos';
import {PhotosApiService} from '../../services/photos-api.service';
import {Observable} from 'rxjs';
import {PhotoModel} from '../../models/photo-model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  public photos: Observable<PhotoModel[]>;
  mockPhotos = MOCK_PHOTOS;

  constructor(
    private photosApiService: PhotosApiService
  ) { }

  ngOnInit() {
    this.photos = this.photosApiService.getPhotos();
  }

}
