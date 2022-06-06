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
  hotelavailable:number = 5;
  search!:string;
  hoteldata:any;
  object:any=[];
  maxdate:any;
  constructor(private formbuilder:FormBuilder,private api:ApiserviceService ) {}

  ngOnInit(): void {
    this.resortbook = this.formbuilder.group({
      'name':['',Validators.required],
      'mobileNumber':['',Validators.required],
      'date':['',Validators.required],
      'hotel':['',Validators.required],
      'email':['',Validators.required],
      'Room':['',Validators.required],
        'file':['',Validators.required],
        'food':['',Validators.required],


    })
    this.futuredate();
  }
  bookHotel(Formvalue:NgForm){
    console.log(Formvalue);
    this.api.bookHotel(Formvalue).subscribe((data)=>{
      console.log(data);
    })
    alert('your room was booked!!!')
  }
  hotellist() {
    
    this.api.viewhotel().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.hoteldata=data;
      this.hoteldata=this.hoteldata.data.docs;
      console.log(this.hoteldata);
      for(const i of this.hoteldata){
            console.log(i);
            this.object.push(i);
            console.log('details of the hotel data was successfully geted'); 
      }
    
    })
  }
     // to block the past date in the calculator
    futuredate(){
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
      this.maxdate = currentyear + "-" + currentmonth + "-" + currentdate;
      console.log(this.maxdate);
      
    }
}
 
