import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() myName:string = "";
  @Input() myType:string = "";
  @Input() myLabel:string = "";
  writeOrNot:boolean = false;
  checkOnLen($event: Event):void {
    let target = $event.target as HTMLInputElement;
    if(target.value.length) {
      this.writeOrNot = true;
    } else {
      this.writeOrNot = false;
    }
  }
}
