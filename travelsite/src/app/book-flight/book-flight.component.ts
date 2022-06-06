
import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder,NgForm } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})
export class BookFlightComponent implements OnInit {
  bookFlight!:FormGroup;
  value:boolean=true;
  search!:string;
  object:any=[];
  flightdata:any;
  
  constructor(private formbuilder:FormBuilder,private api:ApiserviceService) { }

  ngOnInit(): void {
    this.bookFlight = this.formbuilder.group({
      'name':['',Validators.required],
      'mobileNumber':['',Validators.required],
      'date':['',Validators.required],
      'flight':['',Validators.required],
      'email':['',Validators.required],
      'seat':['',Validators.required],
       
    })
  }
  // post the flight passanger data
  ticketFlight(Formvalue:NgForm){
    console.log(Formvalue);
    this.api.bookFlight(Formvalue).subscribe((_data: any)=>{
    })
    alert('your flight was booked!!!')

  }
  // view the passanger data
  viewFlightstatus(Formvalue:any) {
    this.api.viewFlights().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.flightdata = data;
      this.flightdata=this.flightdata.docs;
      for(const i of this.flightdata){
            this.object.push(i);
      }
    
    })
  }
}
  
