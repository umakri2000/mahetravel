
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiserviceService } from '../../apiservice.service';
@Component({
  selector: 'app-maldives',
  templateUrl: './maldives.component.html',
  styleUrls: ['./maldives.component.css']
})
export class MaldivesComponent implements OnInit {
  bookup!:FormGroup;
  object:any=[];
  traveldata:any;
  value:boolean=true;

  constructor(private api:ApiserviceService,private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.calcdate();
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
  calcdate(){
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
  
  }
  