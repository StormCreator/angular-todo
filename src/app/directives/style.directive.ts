import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  constructor(private elem: ElementRef, private renderer: Renderer2) { 
    
  }

  @HostListener('mouseenter', ['$event.target']) onEnter(event: Event){
    this.renderer.addClass(event, 'card-hovered');
  }

  @HostListener('mouseleave', ['$event.target']) onLeave(event: Event){
    this.renderer.removeClass(event, 'card-hovered');
  }

}
