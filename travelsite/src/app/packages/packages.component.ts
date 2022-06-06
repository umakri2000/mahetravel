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
  
  }
  // function to view packages
  
viewPackage(){
  this.api.packageoffer().subscribe(data=>{
    console.log(data);
    console.log('Data was fetching');
    this.packageData=data;
    this.packageData=this.packageData.data.docs;
    console.log(this.packageData);
    for(const i of this.packageData){
          console.log(i);
          this.object.push(i);
          console.log('details of the traveller was successfully added');
    }
  
  })
}
 goToPage7(place:string){
   this.router.navigate([`${place}`])
 }
}

