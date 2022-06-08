import { Component, OnInit } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
email:any;
name:any;
place:any;
date:any;
aadhar:any;
mobileNumber:any;
hotel:any;
// pdf:any;
  constructor() { 
    // to overcome sonar code-smell
  }

  ngOnInit(): void {
    let local:any=localStorage.getItem("formvalue");
    let parsed=JSON.parse(local);
    this.email=parsed.email;
    this.name=parsed.firstName;
    this.place=parsed.place;
    this.date=parsed.date;
    this.mobileNumber=parsed.mobileNumber;
  this.aadhar=parsed.aadhar
  this.hotel=parsed.hotel
  }
defaultOptions = {
  jsPDF: {
    unit: 'px',
    format: 'a4',
  },
  html2canvas: {
    imageTimeout: 15000,
    logging: true,
    useCORS: false,
  },
  imageType: 'image/jpeg',
  imageQuality: 1,
  margin: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  output: 'jspdf-generate.pdf', 
  init: function() { console.log("pdf") },
  success: function(pdf:any) {
    pdf.save('bill');
  }
}
public openPdf(): void {
  let DATA: any = document.getElementById('print');
  html2canvas(DATA).then((canvas) => {
    let fileWidth = 208;
    let fileHeight = (canvas.height * fileWidth) / canvas.width;
    const FILEURI = canvas.toDataURL('image/png');
    let PDF = new jsPDF('p', 'mm', 'a4');
    let position = 0;
    PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
   
  
    PDF.save( 'Ticket');
  });
}
}
