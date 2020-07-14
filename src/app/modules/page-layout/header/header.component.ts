import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {MENU_ROUTES} from './routes.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  public routes = MENU_ROUTES;

  constructor() { }

  ngOnInit() {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

}
