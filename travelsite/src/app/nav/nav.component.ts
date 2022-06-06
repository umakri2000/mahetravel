import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  show:boolean=false;
  loginshow:boolean=true;
  constructor(public api :ApiserviceService,private router:Router) { }
name:any
  ngOnInit(): void {
    let local:any=localStorage.getItem("formvalue");
    let parsed=JSON.parse(local);
    this.name=parsed.email;
   
  }

// function for logout
logout(){
  this.api.loginshow=false;
  this.api.show=true;
  this.router.navigate(['/login']);
  console.log(this.name);
}

}
