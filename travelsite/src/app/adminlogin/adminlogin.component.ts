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
admindata:any;
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
for (const iterator of this.object) {
  
  if(iterator.username == formvalue.username && iterator.password==formvalue.password){
  {
    this.router.navigate(['/admindashboard']);
    alert('valid mailid ') 
  }
    }
  }}
  adminLoginDb() {
    this.api.adminlogindb().subscribe(data=>{
      console.log(data);
      
      this.admindata=data;
      this.admindata=this.admindata.data.docs;
      for(const i of this.admindata){
            this.object.push(i);
      }
    })
  }
}
