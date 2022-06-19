import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
 feedback!:FormGroup
  constructor(private formbuilder:FormBuilder,private api:ApiserviceService) { }

  ngOnInit(): void {
    this.feedback=this.formbuilder.group(
      {
        'firstName':['',Validators.required],
        'mobileNumber':['',Validators.required],
        'email':['',Validators.required],
        'place':['',Validators.required],
        'feedback':['',Validators.required],
        'rating':['',Validators.required]

      }
    )
  }
  sendFeedback(formvalue:any){
      this.api.feedback(formvalue).subscribe((data: any)=>{
        console.log(data);
  });
}
}
