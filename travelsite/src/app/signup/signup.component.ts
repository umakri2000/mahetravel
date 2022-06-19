import { Component, OnInit } from '@angular/core';
import { Validators,FormBuilder,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupForm!:FormGroup;
  constructor(private formbuilder:FormBuilder,private api:ApiserviceService,private router: Router) { }

  ngOnInit(): void {
    this.signupForm=this.formbuilder.group(
      {'firstName':['',Validators.required],
        'email':['',Validators.required],
         'password':['',Validators.required]
      }
    )
  }
  login(formvalue:any){
    this.api.signup(formvalue).subscribe((data: any)=>{
      console.log(data);
      this.router.navigate(['/login'])
    }
    )
  }
}
 





