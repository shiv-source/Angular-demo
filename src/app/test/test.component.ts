import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  textMsg="";
  eventMessage="";
  values = '';
 public active=false;
 public clickMessage="";
  num='click me';
  name= "kumar";
  x="HI";
  y= "Shiv";
  staticUrl= window.location.href;
  uNAme= window.location.hostname;
  myId="TestID"
  k=false;
  success="text-success";
  danger="text-danger";
  textError=false;
  messageClass={
    "text-success":!this.textError,
    "text-danger": this.textError, 

  };
  styleProp="#753f48";
  styleBinding={
    color: "green",
    fontStyle: "italic"
  };




  constructor() { }

  ngOnInit() {
  
  }

  greetUser(){
  return  "HELLO " + this.name;
  }

  clickButton(){
    
    if(this.active){
      this.num="Hello World";
      this.active=false;
    }else{
      this.num="click me";
      this.active=true;
    }
  }

  // onClick(){
  //   this.clickMessage= "Welcome in the Demo App."
  // }
  onClick(){
    if(this.active){
      this.clickMessage="Welcome in the Demo App.(show hide message) "
      this.active=false;
    }
    else{
      this.clickMessage=null;
      this.active=true;
    }
  }
  // onKey(event: any) { // without type info
  //   this.values += event.target.value + ' | ';
  // }

  onClickEvent(event:any){
    this.eventMessage=event.type
  }
  // onKey(event: KeyboardEvent) { // with type info
  //   this.values += (event.target as HTMLInputElement).value + ' | ';
  // }

  onKey(value: string) {
    this.values += value + ' | ';
  }

 
}
