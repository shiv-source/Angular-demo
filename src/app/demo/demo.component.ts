import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  @Input() public parentData;
  // both are same
  // @Input('parentData') public company ;
  @Output() public childEvent = new EventEmitter();
    displayText=true;
    displayName=false;
    displayMsg=false;
    colorss ='blue';
    colors=["red","green","orange","blue","white"];
    message ="sHIv kuMAr";
    nameJson={
      "shiv": "kumar",
      "sourav": "Rock",
    };
    today= new Date()



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

  fireEvent(){
    this.childEvent.emit('Child component to parent component.')
  }

}
