import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appEmphasize]'
})
export class EmphasizeDirective implements OnInit{
  @Input('appEmphasize') option:any;
  public el;
  constructor(el: ElementRef) {
    this.el = el.nativeElement;
   }
   public ngOnInit() {
     if(this.option.score < 70) this.el.style.color = 'red';
   }
}
