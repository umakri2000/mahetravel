import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  travelData:any;
  object :any= [];
  object1 :any= [];
  bookup!:FormGroup;
  search!:string;
  allData:any;
  flag=0;
  place:any=[]
  packageData:any
  objectcheck:any=[];
  maxDate:any;
  formShow!:boolean;
  show:boolean=false;
  constructor(private formbuilder:FormBuilder,private api:ApiserviceService,private router:Router) {
   }
 
  ngOnInit(): void {
    this.formShow=true;
     this.viewPackage()
      this.futureDate();
    this.bookup = this.formbuilder.group(
      {
        
        'first_name':['',Validators.required],
        'date':['',Validators.required],
        'mobileNumber':['',Validators.required],
        'email':['',Validators.required],
        'place':['',Validators.required],
        'aadhar':['',Validators.required],
        // 'file':['',Validators.required],
      }
    )
  }



    ticketBookForm(Formvalue:any){
    
      this.api.bookData(Formvalue).subscribe((data: any)=>{
        console.log(data);
      localStorage.setItem("formvalue",JSON.stringify(this.bookup.value))


        alert('Your Ticket was booked!!!!!!!!!')
        this.router.navigate(['/home']);

      })
  }
  // to display the status of the passangers
  displayDetails(_formvalue:any) {
    this.api.displayDetails().subscribe(data=>{  
      this.travelData=data;
      this.travelData=this.travelData.data.docs;
      for(const i of this.travelData){
            this.object1.push(i);
           }
      })
 }
 repeatValidation(formvalue:any){
       
  this.api.displayDetails().subscribe(data=>{               
    this.travelData=data;
    this.travelData=this.travelData.data.docs;
    for(const i of this.travelData){
          this.object1.push(i);
          
          if(i.aadhar == formvalue.aadhar){
            this.flag=1;
          }
         }
         setTimeout(() => {
           if(this.flag==1){
             alert('aadhar number exist');
           }
           else{
             this.ticketBookForm(formvalue);
           }
         }, 1000);
    })

}viewPackage(){
      this.api.packageOffer().subscribe(data=>{
        console.log(data);
        this.packageData=data;
        this.packageData=this.packageData.data.docs;
        console.log(this.packageData);
        for(const i of this.packageData){
              console.log(i);
              this.place.push(i);
        }
      
      })
    } 

    // to block the past date in the calculator
    futureDate(){
      let date = new Date();
      let currentdate:any = date.getDate();
      let currentmonth:any = date.getMonth() + 1;
      let currentyear:any = date.getFullYear();
      if (currentdate < 10){
        currentdate = "0" + currentdate;
      }
      if(currentmonth < 10){
        currentmonth = "0" + currentmonth;
      }
      this.maxDate = currentyear + "-" + currentmonth + "-" + currentdate;
      
    }
    showOff(){
      this.formShow=!this.formShow;
      this.show=!this.show;
    }

    
    }  


