import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-packagecard',
  templateUrl: './packagecard.component.html',
  styleUrls: ['./packagecard.component.css']
})
export class PackagecardComponent implements OnInit {
packageData:any;
object:any=[];
search!:string;
  constructor(private api:ApiserviceService,) { }

  ngOnInit(): void {
    this.viewPackage();
  }
  viewPackage(){
    this.api.packageOffer().subscribe(data=>{
      this.packageData=data;
      this.packageData=this.packageData.data.docs;
      for(const i of this.packageData){
            this.object.push(i);
           
    
    }})
  }
}
