
import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { RegisterComponent } from './register/register.component';
import { TourgoaComponent } from './home/tourgoa/tourgoa.component';
import { TourmunnarComponent } from './home/tourmunnar/tourmunnar.component';
import { TourdarjeelingComponent } from './home/tourdarjeeling/tourdarjeeling.component';
import { MaldivesComponent } from './home/maldives/maldives.component';
import { HomeComponent } from './home/home.component';
import { FlightsComponent } from './flights/flights.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { ViewhotelComponent } from './viewhotel/viewhotel.component';
import { HotelComponent } from './hotel/hotel.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { ViewpassangerComponent } from './viewpassanger/viewpassanger.component';
import { PackagesComponent } from './packages/packages.component';
const routes: Routes = [
{path:'register',component:RegisterComponent},
{path:'login',component:LoginComponent},
{path:'hotel',component:HotelComponent},
{path:'packages',component:PackagesComponent},
{path:'admindashboard',component:AdmindashboardComponent},
{path:'adminlogin',component:AdminloginComponent},
{path:'tourgoa',component:TourgoaComponent},
{path:'maldives',component:MaldivesComponent},
{path:'tourmunnar',component:TourmunnarComponent},
{path:'tourdarjeeling',component:TourdarjeelingComponent},
{path:'admin',component:AdminComponent},
{path:'home',component:HomeComponent},
{path:'viewpassanger',component:ViewpassangerComponent},
{path:'viewhotel',component:ViewhotelComponent},
{path:'flights',component:FlightsComponent,
children: [
  {
    path:'book-flight', component:BookFlightComponent
  },
 
]
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
