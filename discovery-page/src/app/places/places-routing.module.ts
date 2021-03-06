import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlacesPage } from './places.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: PlacesPage,
    children:[
      {
       path:'discover',
       children:[
         {path:'',
         loadChildren:()=>import('./discover/discover.module').then(m=>m.DiscoverPageModule)},
         {path:':placeId', loadChildren:()=>import('./discover/place-detail/place-detail.module').then(m=>m.PlaceDetailPageModule)}


       ]
      },

      {
        path:'offers',
        children:[
          {path:'', loadChildren:()=>import('./offer/offer.module'). then(m=>m.OfferPageModule)},
          {path:'new', loadChildren:()=>import('./offer/new-offer/new-offer.module').then(m=>m.NewOfferPageModule)},
          {path:'edit/:placeId', loadChildren:()=>import('./offer/edit-offer/edit-offer.module').then(m=>m.EditOfferPageModule)},
          {path:':placeId', loadChildren:()=>import('./offer/offer-bookings/offer-bookings.module'). then (m=>m.OfferBookingsPageModule)}


        ]
      },
      {path:'', redirectTo:'/places/tabs', pathMatch:'full'}

    ]
  },
  {
    path:'',
    redirectTo:'/places/tabs',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlacesPageRoutingModule {}
