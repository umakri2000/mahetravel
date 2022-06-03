import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators,FormBuilder} from '@angular/forms';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  traveldata:any;
  // value:boolean=true;
  object :any= [];
  object1 :any= [];
  bookup!:FormGroup;
  search!:string;
  alldata:any;
  flag=0;
  place:any=[]
  packagedata:any
  objectcheck:any=[];
  maxdate:any;
  formshow!:boolean;
  show:boolean=false;
  constructor(private formbuilder:FormBuilder,private api:ApiserviceService) {
   }
 
  ngOnInit(): void {
    this.formshow=true;
     this.viewpackage()
      this.futuredate();
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



    ticketBookform(Formvalue:any){
    
      this.api.bookData(Formvalue).subscribe((data: any)=>{
        console.log(data);

        alert('Your Ticket was booked!!!!!!!!!')

      })
  }
  // to display the status of the passangers
  displayDetails(formvalue:any) {
    this.api.displayDetails().subscribe(data=>{  
      console.log(data)
      console.log(data)             

      this.traveldata=data;
      this.traveldata=this.traveldata.data.docs;
      console.log(this.traveldata);
      for(const i of this.traveldata){
            this.object1.push(i);
           }
      })
 }
 repeatvalidation(formvalue:any){
       
  this.api.displayDetails().subscribe(data=>{               
    this.traveldata=data;
    this.traveldata=this.traveldata.data.docs;
    console.log(this.traveldata);
    for(const i of this.traveldata){
          this.object1.push(i);
          console.log(i.aadhar);
          
          if(i.aadhar == formvalue.aadhar){
            this.flag=1;
          }
         }
         setTimeout(() => {
           if(this.flag==1){
             alert('aadhar number exist');
           }
           else{
             this.ticketBookform(formvalue);
           }
         }, 1000);
    })

}viewpackage(){
      this.api.packageoffer().subscribe(data=>{
        console.log(data);
        this.packagedata=data;
        this.packagedata=this.packagedata.data.docs;
        console.log(this.packagedata);
        for(const i of this.packagedata){
              console.log(i);
              this.place.push(i);
        }
      
      })
    } 

    // to block the past date in the calculator
    futuredate(){
      var date = new Date();
      var currentdate:any = date.getDate();
      var currentmonth:any = date.getMonth() + 1;
      var currentyear:any = date.getFullYear();
      if (currentdate < 10){
        currentdate = "0" + currentdate;
      }
      if(currentmonth < 10){
        currentmonth = "0" + currentmonth;
      }
      this.maxdate = currentyear + "-" + currentmonth + "-" + currentdate;
      console.log(this.maxdate);
      
    }
    showoff(){
      this.formshow=!this.formshow;
      console.log(this.formshow);
      this.show=!this.show;
    }
    
    }  


