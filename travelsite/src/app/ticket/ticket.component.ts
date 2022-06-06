import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
packagedata:any;
object:any=[];
search!:string;

  constructor(private api :ApiserviceService) { }

  ngOnInit(): void {
    // to covercome sonar lint code smell

  }
  viewPackage(){
    this.api.packageOffer().subscribe(data=>{
      console.log(data);
      console.log('Data was fetching');
      this.packagedata=data;
      this.packagedata=this.packagedata.data.docs;
      console.log(this.packagedata);
      for(const i of this.packagedata){
            console.log(i);
            this.object.push(i);
            console.log('details of the traveller was successfully added');
      }
    
    })
  }
  deleteTrip(data:any,data1:any){
    this.api.deleteHotel(data._id,data1._rev).subscribe(_res=>{
      location.reload();
    },rej=>{
      console.log('Error',rej);   
    })
     }
}
