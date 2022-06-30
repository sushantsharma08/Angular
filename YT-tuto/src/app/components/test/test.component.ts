import { Component, OnInit } from '@angular/core';
import { bufferToggle } from 'rxjs';

@Component({
  selector: 'app-test',
  template: `
              <h2>welcome {{Name}}</h2>
              <h2>Hello title</h2>
              <h2 [style.color]="'orange'">Hello title</h2>
              <h2 [style] = "titleStyles">Hello title</h2>
              <button (click)="onClick($event)">button</button>
              {{Space}}
              <button (click)="Space='welcome!'">button</button>
              <br><br>
              <input #myInput type="text">
              <button (click)="logValue(myInput.value)">log</button>
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
  onClick(event: any){
    console.log(event)
     this.Space = event.type;
  }
  logValue(value :any){
    console.log(value);
    
  }
  ngOnInit(): void {
  }

}