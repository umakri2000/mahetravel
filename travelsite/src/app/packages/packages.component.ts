import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {
object:any=[];
packageData:any;
search!:string;

constructor(private api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
    // to covercome sonar lint code smell
  
  }
  // function to view packages
  
viewPackage(){
  this.api.packageOffer().subscribe(data=>{
    this.packageData=data;
    this.packageData=this.packageData.data.docs;
    for(const i of this.packageData){
          this.object.push(i);
         
  
  }})
}
 goToPage7(place:string){
   this.router.navigate([`${place}`])
 }
}

