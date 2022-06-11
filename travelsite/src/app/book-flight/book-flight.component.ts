
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
  flightData:any;
  object1:any=[];
  
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
    this.flightDetails();
  }
  // post the flight passanger data
  ticketFlight(Formvalue:NgForm){
    this.api.bookFlight(Formvalue).subscribe((_data: any)=>{
      console.log(_data);
    })


  }
  flightDetails() {
    console.log('flightdetails')
    this.api.flightDetails().subscribe(data=>{  
      this.flightData=data;
      this.flightData=this.flightData.data.docs;
      for(const i of this.flightData){
            this.object1.push(i);
            console.log(this.object1)
           }
      })
  }
  // view the passanger data
  viewFlightstatus(_Formvalue:any) {
    this.api.viewFlights().subscribe(data=>{
      console.log('Data was fetching');
      this.flightData = data;
      this.flightData=this.flightData.docs;
      for(const i of this.flightData){
            this.object.push(i);
      }
    
    })
  }
}
  
