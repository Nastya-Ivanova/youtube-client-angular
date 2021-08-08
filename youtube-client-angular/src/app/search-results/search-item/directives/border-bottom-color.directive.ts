import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appBorderBottomColor]'
})
export class BorderBottomColorDirective implements OnInit{
  @Input() appBorderBottomColor!:string;

  constructor(private elementRef:ElementRef) { }

  ngOnInit():void {
    this.elementRef.nativeElement.style.borderBottomColor = this.appBorderBottomColor;
  }
}
