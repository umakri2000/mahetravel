
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';

import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginform!:FormGroup;
  logindata:any
  object: any=[];
  myId:any;
  
  navbar:boolean=true;  
  constructor(private api:ApiserviceService, private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group(
      {
        'email':['',Validators.required],
         'password':['',Validators.required],
        _id:[''],
        _rev:['']
      }
    )
    }
    login(formvalue:any){
      console.log(formvalue);
      console.log("login start");
      this.api.displayDetails().subscribe(data=>{
        this.logindata=data;
        this.logindata=this.logindata.data.docs;
        console.log(this.logindata);
        for(const i of this.logindata){
          console.log(i);
          this.object.push(i);    
        }
      })
      // to check the valid mail for login
      setTimeout(() => {
        for (const iterator of this.object) {
          if(iterator.email == formvalue.email ){
            this.api.showoff();
            console.log("login");
            // alert('success')
            this.router.navigate(['/register']);
          }
          else{
            console.log('invalid')
          }  
        }
      },1000);
    }
      }
