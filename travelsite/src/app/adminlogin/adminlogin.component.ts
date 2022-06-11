import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
packageform!:FormGroup;
object:any=[];
adminData:any;
  constructor(private formbuilder:FormBuilder, private api:ApiserviceService,private router:Router ) { }

  ngOnInit(): void {
    this.packageform = this.formbuilder.group(
      {
        username:['',Validators.required],
        password:['',Validators.required],
        _id:[''],
        _rev:['']
      }
    )
      this.adminLoginDb()
  }
adminLogin(formvalue:any){
  console.log('hi')
for (const iterator of this.object) {
  
  if(iterator.username == formvalue.username && iterator.password==formvalue.password){
  {
    this.router.navigate(['/admindashboard']);
   
  }
    }
  }}
  adminLoginDb() {
    this.api.adminLoginDb().subscribe(data=>{
      console.log(data);
      
      this.adminData=data;
      this.adminData=this.adminData.data.docs;
      for(const i of this.adminData){
            this.object.push(i);
            console.log(this.object)
      }
    })
  }
}
