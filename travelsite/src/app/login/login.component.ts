
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
  loginData:any
  object: any=[];
  myId:any;
  
  navbar:boolean=true;  
  constructor(private api:ApiserviceService, private formbuilder:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginform=this.formbuilder.group(
      {
        'firstName':['',Validators.required],
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
      this.api.getSignup().subscribe(data=>{
        this.loginData=data;
        this.loginData=this.loginData.data.docs;
        console.log(this.loginData);
        for(const i of this.loginData){
          console.log(i);
          this.object.push(i);    
        }
      })
      // to check the valid mail for login
      setTimeout(() => {
        for (const iterator of this.object) {
          if(iterator.email == formvalue.email && iterator.password == formvalue.password ){
            this.api.showOff();
            console.log("login");
      localStorage.setItem("formvalue",JSON.stringify(this.loginform.value))
            
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
