import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewhotelComponent } from './viewhotel/viewhotel.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HotelComponent } from './hotel/hotel.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NavComponent } from './nav/nav.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HomeComponent } from './home/home.component';
import { TourgoaComponent } from './home/tourgoa/tourgoa.component';
import { TourmunnarComponent } from './home/tourmunnar/tourmunnar.component';
import { TourdarjeelingComponent } from './home/tourdarjeeling/tourdarjeeling.component';
import { MaldivesComponent } from './home/maldives/maldives.component';
import { ViewpassangerComponent } from './viewpassanger/viewpassanger.component';
import { PackagesComponent } from './packages/packages.component';
import { AdminComponent } from './admin/admin.component';
import { FlightsComponent } from './flights/flights.component';
import { BookFlightComponent } from './book-flight/book-flight.component';
import { FooterComponent } from './footer/footer.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { InfoComponent } from './info/info.component';
import { TicketComponent } from './ticket/ticket.component';
import { StatusComponent } from './status/status.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HotelComponent,
    NavComponent,
    AdminloginComponent,
    HomeComponent,
    TourgoaComponent,
    TourmunnarComponent,
    TourdarjeelingComponent,
    MaldivesComponent,
    ViewhotelComponent,
    ViewpassangerComponent,
    PackagesComponent,
    AdminComponent,
    FlightsComponent,
    BookFlightComponent,
    FooterComponent,
    AdmindashboardComponent,
    InfoComponent,
    TicketComponent,
    StatusComponent
  ],
  imports: [
    BrowserModule,FormsModule,
    AppRoutingModule,ReactiveFormsModule,
    HttpClientModule,Ng2SearchPipeModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
