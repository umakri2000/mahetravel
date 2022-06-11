import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  loginshow:boolean=false;
  show:boolean=true;
loginform:any;

  constructor(private http:HttpClient) { 

  }
  bookData(formvalue:any)
  {
    return this.http.post('http://localhost:8000/travel',formvalue);
  }
  signup(formvalue:any){
    return this.http.post('http://localhost:8000/signup',formvalue)

  }
  displayDetails(){
    return this.http.get('http://localhost:8000/displayDetails')
  }
  bookHotel(formvalue:any){
    console.log(formvalue);
    return this.http.post('http://localhost:8000/hotel',formvalue)
  }
  viewHotel(){
    return this.http.get('http://localhost:8000/hotelstatus')
  }
  flightAdd(formvalue:any){
    return this.http.post('http://localhost:8000/flightdata',formvalue)

  }
  adminLoginDb(){
    return this.http.get('http://localhost:8000/adminlogin')}
  packageOffer(){
      return this.http.get(`http://localhost:8000/viewpackage`)   
    }
  adminPackage(Formvalue:any){
      return this.http.post('http://localhost:8000/addpackage',Formvalue)
    }
  getSignup(){

    return this.http.get('http://localhost:8000/getsignup')
  }
  showOff(){
    this.loginshow=!this.loginshow;
  
    this.show=!this.show;
    console.log(this.show)
  }
  deleteHotel(id:any,id1:any){
    return this.http.delete(`http://localhost:8000/deletehotel/${id}/${id1}`)
  }
  viewFlights(){
    return this.http.get('http://localhost:8000/flightDetails')
     }
  bookFlight(formvalue:any){
    return this.http.post('http://localhost:8000/postflightbooking',formvalue)
  }
  flightDetails(){

    return this.http.get('http://localhost:8000/flightget')
  }
 
  
}
