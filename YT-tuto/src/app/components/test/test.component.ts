import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-test',
  template: `
              <h2>welcome {{Name}}</h2>
              <h2>Hello title</h2>
              <h2 [style.color]="'orange'">Hello title</h2>
              <h2 [style] = "titleStyles">Hello title</h2>
              <button (click)="onClick()">button</button>
              {{Space}}
              `,
  styles: []
})
export class TestComponent implements OnInit {
  public Name = "sushant";
  public Space = "";
  constructor() { }

  public titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }
  onClick(){
    console.log("hello")
     this.Space = "button working";
  }
  ngOnInit(): void {
  }

}