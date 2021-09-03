import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { MILLISECONDS_PER_DAY } from '../../constants/milliseconds-per-day';
import { EBorderColor } from '../types/border-color.types';

@Directive({
  selector: '[appBorderBottomColor]',
})
export class BorderBottomColorDirective implements OnInit {
  @Input('appBorderBottomColor') postDate = '';
  colors = [
    [30, 183, EBorderColor.yellow],
    [8, 30, EBorderColor.green],
    [0, 8, EBorderColor.blue],
  ];

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    const currentDate = new Date();
    const publicDate = new Date(this.postDate);
    const daysAfterPublication = Math.ceil(
      (currentDate.getTime() - publicDate.getTime()) / MILLISECONDS_PER_DAY,
    );

    const colorsItem = this.colors.find(
      (color) => daysAfterPublication >= color[0] && daysAfterPublication <= color[1],
    );
    const borderColor = colorsItem ? colorsItem[2] : EBorderColor.red;

    this.renderer.setStyle(this.elementRef.nativeElement, 'border-bottom-color', borderColor);
  }
}
