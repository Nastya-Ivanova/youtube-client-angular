import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {EBorderColor} from './border-color.types'

const MILLISECONDS_PER_DAY = 1000*60*60*24;

@Directive({
  selector: '[appBorderBottomColor]'
})
export class BorderBottomColorDirective implements OnInit{
  @Input('appBorderBottomColor') postDate = '';
  colors = [
    [30, 183, EBorderColor.yellow],
    [8, 30, EBorderColor.green],
    [0, 8, EBorderColor.blue]
  ]

  constructor(private elementRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit():void {
    const currentDate:Date = new Date();
    const publicDate:Date = new Date(this.postDate);
    const daysAfterPublication:number = Math.ceil((currentDate.getTime() - publicDate.getTime()) / MILLISECONDS_PER_DAY);

    const color = this.colors.find(color => daysAfterPublication >= color[0] && daysAfterPublication <= color[1]);
    const borderColor = color ? color[2] : EBorderColor.red;

    this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom-color', borderColor);
  }
}
