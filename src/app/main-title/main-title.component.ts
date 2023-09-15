import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-main-title',
  templateUrl: './main-title.component.html',
  styleUrls: ['./main-title.component.css']
})
export class MainTitleComponent {
  @Input() content:string = "";
  @Input() myColorClass:string ="";
  @Input() myColor:string = ""
}
