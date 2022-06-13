import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  {
  constructor(private router:Router,public api:ApiserviceService) { }
  name:any;
 
  // functio to navigate to another pages
goToPage(place:string){
  this.router.navigate([`${place}`])
}
goToPage1(place:string){
  this.router.navigate([`${place}`])
 }
 goToPage2(place:string){
  this.router.navigate([`${place}`])
}
goToPage3(place:string){
  this.router.navigate([`${place}`])
}
goToPageHotel(place:string){
  this.router.navigate([`${place}`])
}
}



