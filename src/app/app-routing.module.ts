import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddonsComponent } from './addons/addons.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetailsComponent } from './details/details.component';
import { HistoryComponent } from './history/history.component';
import { NotificationComponent } from './notification/notification.component';
import { PopularplansComponent } from './popularplans/popularplans.component';
import { ReviewComponent } from './review/review.component';
import { ReviewformComponent } from './reviewform/reviewform.component';

const routes: Routes = [
  {
    path:'user',
    children:[
      {
        path:'popularplans',
        component:PopularplansComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      },{
        path:'addRecharge',
        component:DetailsComponent
      },{
        path:'notification',
        component:NotificationComponent
      },{
        path:'getRecharge',
        component:HistoryComponent
      },{
        path:'Review',
        component:ReviewComponent
      },{
        path:'addReview',
        component:ReviewformComponent
      },{
        path:'addons',
        component:AddonsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
