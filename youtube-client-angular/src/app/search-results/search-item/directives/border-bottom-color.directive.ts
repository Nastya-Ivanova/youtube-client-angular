import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {EBorderColor} from './border-color.types'

const MILLISECONDS_PER_DAY = 1000*60*60*24;

@Directive({
  selector: '[appBorderBottomColor]'
})
export class BorderBottomColorDirective implements OnInit{
  @Input('appBorderBottomColor') postDate!:string;

  constructor(private elementRef:ElementRef, private renderer: Renderer2) { }

  ngOnInit():void {
    const currentDate:Date = new Date();
    const publicDate:Date = new Date(this.postDate);
    const daysAfterPublication:number = Math.ceil((currentDate.getTime() - publicDate.getTime()) / MILLISECONDS_PER_DAY);

    const borderColor:string = (daysAfterPublication >= 183) ? EBorderColor.red :
      (daysAfterPublication >= 30 && daysAfterPublication < 183) ? EBorderColor.yellow :
        (daysAfterPublication >= 8 && daysAfterPublication < 30) ? EBorderColor.green :
          EBorderColor.blue;

    this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom-color', borderColor);
  }
}
