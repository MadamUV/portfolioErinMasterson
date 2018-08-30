import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.scss']
})
export class DiagramComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("blah");
  }
  /*passColor(bool) {
    const panel1 = document.getElementById("panel1");
    const panel2 = document.getElementById("panel2");
    if(bool){
      //hovering over first item
      panel1.setAttribute("class", "colorForwardChange");
      panel2.setAttribute("class", "colorForwardBackChange");
    }
    else {
      //hovering over second
      panel1.setAttribute("class", "colorForwardBackChange");
      panel2.setAttribute("class", "colorBackChange");
    }
  }*/
}
