import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store/reducers';
import { AppRoutingModule } from './app-routing.module';
import {PageLayoutModule} from './modules/page-layout/page-layout.module';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {TestModule} from './modules/test/test.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    AppRoutingModule,
    PageLayoutModule,
    DashboardModule,
    TestModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
