
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css']
})
export class AdmindashboardComponent implements OnInit {
show:boolean=true;
  constructor(private router:Router) { }

  ngOnInit(): void {
    // to covercome sonar lint code smell
    
  }
  goToPageAddPackage(place:string){
    this.router.navigate([`${place}`])
    this.showOff();

  }
  goToPagehotel(place:string)
  {
    this.router.navigate([`${place}`])
    this.showOff();
  }
  goToPagePassanger(place:string){
    this.router.navigate([`${place}`])
    this.showOff();
  }
  showOff(){
    this.show=!this.show
    
  }
}
