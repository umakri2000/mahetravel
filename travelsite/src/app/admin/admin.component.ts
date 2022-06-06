
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  admin!:FormGroup;
  traveldata:any;
  object:any=[]
  constructor(private formbuilder:FormBuilder,private api:ApiserviceService,private router:Router) {
   }

  ngOnInit(): void {
    
    this.admin = this.formbuilder.group(
      {
        'place':['',Validators.required],
        'price':['',Validators.required],
        'package':['',Validators.required]
      })
  }
  // to post the package form
package(Formvalue:any){
  console.log(Formvalue);
  this.api.adminPackage(Formvalue).subscribe((data)=>{
    console.log(data);
  })
}
// route to view passanger page
goToPage5(place:string){
  this.router.navigate([`${place}`])
}
// route to view hotel page
goToPage6(place:string){
  this.router.navigate([`${place}`])
}

}
