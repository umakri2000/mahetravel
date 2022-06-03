import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-viewhotel',
  templateUrl: './viewhotel.component.html',
  styleUrls: ['./viewhotel.component.css']
})
export class ViewhotelComponent implements OnInit {
hoteldata:any;
object:any=[];
search!:string;
  constructor(private api:ApiserviceService, private formbuilder:FormBuilder) { }

  ngOnInit(): void {
   this.hotellist()
  }
  // to view the traveller booked hotel
  hotellist() {
    this.api.viewhotel().subscribe(data=>{
      console.log(data)
      this.hoteldata=data;
      this.hoteldata=this.hoteldata.data.docs;
      console.log(this.hoteldata);
      for(const i of this.hoteldata){
            console.log(i);
            this.object.push(i);
      }
    })
  }
  // to reject the request of the traeller
  deletehotel(data:any,data1:any){
    this.api.deletehotel(data._id,data1._rev).subscribe(res=>{
      location.reload();
    },rej=>{
      console.log('Error',rej);   
    })
     }
}

