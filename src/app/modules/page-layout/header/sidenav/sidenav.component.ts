import { Component, OnInit } from '@angular/core';
import {MENU_ROUTES} from '../routes.model';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public routes = MENU_ROUTES;

  constructor() { }

  ngOnInit() {
  }

}
