import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';
@Component({
  selector: 'app-tourgoa',
  templateUrl: './tourgoa.component.html',
  styleUrls: ['./tourgoa.component.css']
})
export class TourgoaComponent implements OnInit {
  bookup!:FormGroup;
  object:any=[];
  traveldata:any;
  maxdate:any;
  value:boolean=true;
  data:any;
  object1:any=[];
  
  sum:any=0;
  rating:number=3
  count:any=0;
  constructor(private api:ApiserviceService,private formbuilder:FormBuilder) { }

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

    console.log(Formvalue);
    for (const iterator of this.object) {
      if(iterator.aadhar == Formvalue.aadhar){
        location.reload();
        alert('aadhar number exist')
        
      }
        }
    this.api.bookData(Formvalue).subscribe((data: any)=>{
      console.log(data);
     
    })
    
  }
  // function for disable past date
  futuredate(){
    let date = new Date();
    let presentdate:any = date.getDate();
    let presentmonth:any = date.getMonth() + 1;
    let presentyear:any = date.getFullYear();
    if (presentdate < 10){
      presentdate = "0" + presentdate;
    }
    if(presentmonth < 10){
      presentmonth = "0" + presentmonth;
    }
    this.traveldata = presentyear + "-" + presentmonth + "-" + presentdate;
    console.log(this.traveldata);
  }
  
 cummulative(){
  this.sum = this.rating+this.sum;
  console.log(this.sum/23)
  
 }
  }


