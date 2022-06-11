import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-flightadd',
  templateUrl: './flightadd.component.html',
  styleUrls: ['./flightadd.component.css']
})
export class FlightaddComponent implements OnInit {
addFlight!:FormGroup;
object1:any=[];
flightData:any;
  constructor(private api:ApiserviceService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.addFlight = this.formbuilder.group({
      'flightName':['',Validators.required],
      'seat':['',Validators.required],
      'fromplace':['',Validators.required],
      'toplace':['',Validators.required],
    })
    
  }
flight(formvalue:any){
  // console.log(formvalue)
  this.api.flightAdd(formvalue).subscribe((data: any)=>{
    console.log(data);
})



}
}