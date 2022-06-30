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
              <h1>Two Way Binding</h1>
              <input [(ngModel)]="inputText" type="text">
              {{inputText}}
              <h1>ngIf</h1>
              <div *ngIf="Display; else elseBlock">Hello</div>
              <ng-template #elseBlock>
                <div>else code shown</div>
              </ng-template>
              `,
  styles: []
})
export class TestComponent implements OnInit {
  public Display = "";
  public Name = "sushant";
  public Space = "";
  public inputText = "";
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