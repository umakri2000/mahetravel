import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
email:any;
name:any;
place:any;
date:any;
mobileNumber:any;
  constructor() { 
    // to overcome sonar code-smell
  }

  ngOnInit(): void {
    let local:any=localStorage.getItem("formvalue");
    let parsed=JSON.parse(local);
    this.email=parsed.email;
    this.name=parsed.first_name;
    this.place=parsed.place;
    this.date=parsed.date;
    this.mobileNumber=parsed.mobileNumber
  
  }
print(){
  window.print();
}
}
