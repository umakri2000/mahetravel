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
packagedata:any;
search!:string;

constructor(private api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
  
  }
  // function to view packages
  
viewpackage(){
  this.api.packageoffer().subscribe(data=>{
    console.log(data);
    console.log('Data was fetching');
    this.packagedata=data;
    this.packagedata=this.packagedata.data.docs;
    console.log(this.packagedata);
    for(const i of this.packagedata){
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

