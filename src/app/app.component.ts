import { Component } from '@angular/core';
import { CommonService } from './services/common.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstApp';
  company= "Mechlin";
  message="";
  data: any;
  constructor(private commonSvc: CommonService){}
   
  ngOnInit(){
    this.commonSvc.getData().subscribe((res)=>{
      this.data = res;
    })
  }
}
