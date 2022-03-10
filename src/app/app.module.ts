import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularplansComponent } from './popularplans/popularplans.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { NotificationComponent } from './notification/notification.component';
import { FormsModule } from '@angular/forms';
import { PlansService } from './service/plans.service';
import { HistoryComponent } from './history/history.component';
import { HttpClientModule } from '@angular/common/http';
import { ReviewComponent } from './review/review.component';
import { ReviewformComponent } from './reviewform/reviewform.component';
import { AddonsComponent } from './addons/addons.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularplansComponent,
    DashboardComponent,
    DetailsComponent,
    NotificationComponent,
    HistoryComponent,
    ReviewComponent,
    ReviewformComponent,
    AddonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [PlansService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
