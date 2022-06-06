import { Component, OnInit } from '@angular/core';
import { FormBuilder} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-viewpassanger',
  templateUrl: './viewpassanger.component.html',
  styleUrls: ['./viewpassanger.component.css']
})
export class ViewpassangerComponent implements OnInit {
  search!:string;
  alldata:any;
  traveldata:any;
  object:any=[]
  constructor(private formbuilder:FormBuilder,private api:ApiserviceService) { }
  ngOnInit(): void {
    // to covercome sonar lint code smell

  }
  // to view the passanger list
  passangerList() {
    this.api.displayDetails().subscribe(data=>{
      this.traveldata=data;
      this.traveldata=this.traveldata.data.docs;
    
      for(const i of this.traveldata){
            console.log(i);
            this.object.push(i);
        }
       
      }
        
    
  )}
}

