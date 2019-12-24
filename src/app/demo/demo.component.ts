import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
    displayText=true;
    displayName=false;
    displayMsg=false;
    colorss ='blue';
    colors=["red","green","orange","blue","white"]



  constructor() { }

  ngOnInit() {
  }
  onclick(){
    if(this.displayText){
      this.displayText=false;
    }
    else{
      this.displayText=true;
    }
  }
  onClickMouse(){
    if(this.displayName){
      this.displayName=false;
    }
    else{
      this.displayName=true;
    }
  }
  onClickMsg(){
    if(this.displayMsg){
      this.displayMsg=false;
    }
    else{
      this.displayMsg=true;
    }
  }

}
