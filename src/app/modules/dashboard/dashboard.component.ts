import { Component, OnInit } from '@angular/core';
import {MOCK_PHOTOS} from '../test/mock-data/mock-photos';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  mockPhotos = MOCK_PHOTOS;

  constructor() { }

  ngOnInit() {
  }

}
