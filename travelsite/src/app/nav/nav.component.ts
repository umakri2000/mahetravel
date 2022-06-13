import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent  {
  show:boolean=false;
  loginshow:boolean=true;
  constructor(public api :ApiserviceService,private router:Router) { }
name:any
 

// function for logout
logOut(){
  this.api.loginshow=false;
  this.api.show=true;
  this.router.navigate(['/login']);
}

}
