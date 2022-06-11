import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-flights',
  templateUrl: './flights.component.html',
  styleUrls: ['./flights.component.css']
})
export class FlightsComponent implements OnInit {
  flightData:any;
  object1:any=[];
  constructor(private api:ApiserviceService) {
    console.log('I am constructor')
   }

  ngOnInit(): void {
    // to covercome sonar lint code smell
this.flightDetails();
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
}


