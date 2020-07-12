import {Component, Input, OnInit} from '@angular/core';
import {PhotoModel} from '../../../models/photo-model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  photo: PhotoModel;

  constructor() { }

  ngOnInit() {
  }

}
