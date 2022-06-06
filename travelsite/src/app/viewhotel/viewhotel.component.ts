import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewhotelComponent implements OnInit {
hotelData:any;
object:any=[];
search!:string;
  constructor(private api:ApiserviceService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
   this.hotelList()
  }
  // to view the traveller booked hotel
  hotelList() {
    this.api.viewHotel().subscribe(data=>{
      console.log(data)
      this.hotelData=data;
      this.hotelData=this.hotelData.data.docs;
      console.log(this.hotelData);
      for(const i of this.hotelData){
            console.log(i);
            this.object.push(i);
      }
    })
  }
}

