import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-sidenavbar',
  templateUrl: './sidenavbar.component.html',
  styleUrls: ['./sidenavbar.component.scss']
})
export class SidenavbarComponent implements OnInit {

   showFiller = false;
   list=[1,2,3,4,5,6];

   panelOpenState = false;

  constructor() { }

  ngOnInit(): void {
  }

  showInfo(data:any){
    console.log(data);
  }

  exit(){
    console.log("exited");
    
  }

}