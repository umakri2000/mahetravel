
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent {
show:boolean=true;
  constructor(private router:Router) { }

 
  goToPageAddPackage(place:string){
    this.router.navigate([`${place}`])
    this.showOff();

  }
  goToPageHotel(place:string)
  {
    this.router.navigate([`${place}`])
    this.showOff();
  }
  goToPagePassanger(place:string){
    this.router.navigate([`${place}`])
    this.showOff();
  }
  goToPageAddFlight(place:string){
    this.router.navigate([`${place}`])

  }
  showOff(){
    this.show=!this.show
    
  }
}
