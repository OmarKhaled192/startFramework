import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-pop',
  templateUrl: './image-pop.component.html',
  styleUrls: ['./image-pop.component.css']
})
export class ImagePopComponent {
  @Input() ImgPath:string = "";
  ImgName:string = this.ImgPath?.split("/")[this.ImgPath?.split("/").length-1];
  myClass:boolean = false
  open():void {
    this.myClass = true
  }
  close():void {
    this.myClass = false
  }
  prevent(event: Event): void {
    event.stopPropagation();
  }
}
