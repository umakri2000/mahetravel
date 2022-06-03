
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
  goToPagepassanger(place:string){
    this.router.navigate([`${place}`])
    this.showOff();
  }
  showOff(){
    console.log('hii')
    this.show=!this.show
    // this.cardShow=!this.cardShow
    
  }
}
