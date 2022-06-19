import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder,NgForm } from '@angular/forms';

import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {
  resortbook!:FormGroup;
  value:boolean=true;
  search!:string;
  hotelData:any;
  object:any=[];
  maxDate:any;
  data:any;
  constructor(private formbuilder:FormBuilder,private api:ApiserviceService ) {}
  ngOnInit(): void {
    this.resortbook = this.formbuilder.group({
      'name':['',Validators.required],
      'mobileNumber':['',Validators.required],
      'date':['',Validators.required],
      'hotel':['',Validators.required],
      'email':['',Validators.required],
      'Room':['',Validators.required],
        'food':['',Validators.required],
    })
    this.futureDate();
  }
  bookHotel(Formvalue:NgForm){
    this.api.bookHotel(Formvalue).subscribe((data)=>{
      console.log(data);
    })
    
  }
  hotelList() {
    
    this.api.viewHotel().subscribe(data=>{
      
      this.hotelData=data;
      this.hotelData=this.hotelData.data.docs;
      console.log(this.hotelData);
      for(const i of this.hotelData){
            this.object.push(i);
      }
    
    })
  }
     // to block the past date in the calculator
    futureDate(){
      let date = new Date();
      let currentdate:any = date.getDate();
      let currentmonth:any = date.getMonth() + 1;
      let currentyear:any = date.getFullYear();
      if (currentdate < 10){
        currentdate = "0" + currentdate;
      }
      if(currentmonth < 10){
        currentmonth = "0" + currentmonth;
      }
      this.maxDate = currentyear + "-" + currentmonth + "-" + currentdate;
    
      
    }
}
 
