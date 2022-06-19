import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiserviceService } from '../apiservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit  {
  constructor(private router:Router,public api:ApiserviceService) { }
  name:any;
  feedbackData:any;
  object1:any=[];
  count=1;
  sum=0;
  ans:any;
  rating:any;
  maldivesrate:number=0;
  munarrate:number=0;
  final:number=0;
  result:number=0;

  ngOnInit(): void {
    this.feedbackrating();
  }
  // functio to navigate to another pages
goToPage(place:string){
  this.router.navigate([`${place}`])
}
goToPage1(place:string){
  this.router.navigate([`${place}`])
 }
 goToPage2(place:string){
  this.router.navigate([`${place}`])
}
goToPage3(place:string){
  this.router.navigate([`${place}`])
}
goToPageHotel(place:string){
  this.router.navigate([`${place}`])
}

feedbackrating(){
  console.log('hi')
  this.api.getfeedback().subscribe(data=>{  
    this.feedbackData=data;
    this.feedbackData=this.feedbackData.data.docs;
    for(const i of this.feedbackData){
          this.object1.push(i);
          console.log(this.object1);
          if(this.object1)
          {
            if(i.place=='goa')
            {
            this.count++;
            console.log(i.rating);
            for( const x of this.feedbackData){
              this.count++
              console.log(this.feedbackData)
              console.log(i.rating);
              i.rating=i.rating+i.rating;
              this.ans=i.rating/this.count;
              this.result=this.ans+this.final;
              console.log(this.result);

            }
          }
          if(i.place=='maldives'){
            console.log(i.place)
            console.log('maldives works');
            for( const x of this.feedbackData){
          if(i.place=='maldives'){

              this.count++
              console.log(this.feedbackData)
              console.log(i.rating);
              i.rating=i.rating+i.rating;
              this.ans=i.rating/this.count;
              this.maldivesrate=this.ans+this.final;
              console.log(this.maldivesrate);

            }
          }
        }
          if(i.place=='munar'){
            console.log('maldives works');
            for( const x of this.feedbackData){
              this.count++
              console.log(this.feedbackData)
              console.log(i.rating);
              i.rating=i.rating+i.rating;
              this.ans=i.rating/this.count;
              this.munarrate=this.ans+this.final;
              console.log(this.munarrate);

            }
          }
          if(i.place=='darjeeling'){
            
            for( const x of this.feedbackData){
              this.count++
              console.log(this.feedbackData)
              console.log(i.rating);
              i.rating=i.rating+i.rating;
              this.ans=i.rating/this.count;
              this.result=this.ans+this.final;
              console.log(this.result);

            }
          }
            
            
          }
          
    }
    
  })

         
}

}