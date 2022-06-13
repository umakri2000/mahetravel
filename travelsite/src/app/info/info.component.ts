import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
name:any;
email:any;
travelData:any;
object1:any=[];
aadhar:any;
  constructor(private api:ApiserviceService,private router:Router) { }

  ngOnInit(): void {
    this.displayDetails()
    let local:any=localStorage.getItem("formvalue");
    let parsed=JSON.parse(local);
    this.email=parsed.email;
    this.name=parsed.firstName;
    console.log(this.name);
  }
// to display the status of the passangers
displayDetails() {
  console.log('hii this is info display')
  this.api.displayDetails().subscribe(data=>{  
    console.log(data)
    console.log(data)             
    this.travelData=data;
    this.travelData=this.travelData.data.docs;
    for(const i of this.travelData){
          this.object1.push(i);
          console.log(this.object1);
         }
        
         this.check();
    })
}
check(){
for (const iterator of this.object1) {
  if(iterator.aadhar == this.aadhar ){
console.log(this.aadhar);

  }
}
}
}
