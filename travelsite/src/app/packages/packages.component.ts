import { Component } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent  {
object:any=[];
packageData:any;
search!:string;

constructor(private api:ApiserviceService,private router:Router) { }

  
  
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

