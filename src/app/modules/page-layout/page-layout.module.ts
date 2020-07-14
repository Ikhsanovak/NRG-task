import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule, MatIconModule, MatListModule, MatMenuModule, MatSidenavModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { SidenavComponent } from './header/sidenav/sidenav.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [PageLayoutComponent, HeaderComponent, FooterComponent, SidenavComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    FlexLayoutModule,
    RouterModule
  ],
  exports: [
    PageLayoutComponent
  ]
})
export class PageLayoutModule { }
