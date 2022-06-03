
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';
@Component({
  selector: 'app-tourdarjeeling',
  templateUrl: './tourdarjeeling.component.html',
  styleUrls: ['./tourdarjeeling.component.css']
})
export class TourdarjeelingComponent implements OnInit {
  bookup!:FormGroup;
  object:any=[];
  traveldata:any;
  value:boolean=true;
  to_date:any;
  constructor(private api:ApiserviceService,private formbuilder:FormBuilder) { }
traveldate:any;
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
        _id:[],
        _rev:[],
      }
    )
  }
  ticketBookform(Formvalue:any){
    for (const iterator of this.object) {
      if(iterator.aadhar == Formvalue.aadhar){
        location.reload();
        alert('aadhar number exist')
      }
        }
        // to post the data
    this.api.bookData(Formvalue).subscribe((data: any)=>{
      console.log(data);
      alert('Your Ticket was booked!!!!!!!!!')
    })
  }
  // function for disable past date
  futuredate(){
    var date = new Date();
    var presentdate:any = date.getDate();
    var presentmonth:any = date.getMonth() + 1;
    var presentyear:any = date.getFullYear();
    if (presentdate < 10){
      presentdate = "0" + presentdate;
    }
    if(presentmonth < 10){
      presentmonth = "0" + presentmonth;
    }
    this.traveldata = presentyear + "-" + presentmonth + "-" + presentdate;
    console.log(this.traveldata);
    
  }
  }


