import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';

@Component({
  selector: 'app-tourmunnar',
  templateUrl: './tourmunnar.component.html',
  styleUrls: ['./tourmunnar.component.css']
})
export class TourmunnarComponent implements OnInit {
  maxdate:any;
  bookup!:FormGroup;
  object:any=[];
  traveldata:any;
  value:boolean=true;
  
  constructor(private api:ApiserviceService ,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.futuredate();
    this.bookup = this.formbuilder.group(
      {
        
        'first_name':['',Validators.required],
        'date':['',Validators.required],
        'mobileNumber':['',Validators.required], 
        'email':['',Validators.required],
        'place':['',Validators.required],
        'aadhar':['',Validators.required],
        'file':['',Validators.required],
        
      }
    )
  }
  // function to post the data
  ticketBookform(Formvalue:any){

    console.log(Formvalue);
    for (const iterator of this.object) {
      if(iterator.aadhar == Formvalue.aadhar){
        location.reload();
        alert('aadhar number exist')
        
      }
        }
    this.api.bookData(Formvalue).subscribe((data: any)=>{
      console.log(data);
      alert('Your Ticket was booked!!!!!!!!!')
    })
    
  }
  // function for disable past date
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
    this.traveldata = currentyear + "-" + currentmonth + "-" + currentdate;
    console.log(this.traveldata);
    
  }
  }
  


