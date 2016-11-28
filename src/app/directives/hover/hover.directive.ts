import { Directive, ElementRef, Renderer, HostListener, Input, OnInit } from '@angular/core';

@Directive({
    selector:'[mHover]'
})
export class HoverDirective implements OnInit{

    @Input('mHover')
    className: string;
    
    // @Input()
    // decoration: string = 'none';

    constructor(
        private el: ElementRef,
        private renderer: Renderer
    ){
        console.log(el);
    }

    @HostListener('mouseenter')
    onMouseEnter(){
        this.decorateElement(true);
    }

    @HostListener('mouseleave')
    onMouseLeave(){
        this.decorateElement(false);
    }

    decorateElement(status){
        this.renderer.setElementClass(this.el.nativeElement.children[0], this.className, status);
    }

    ngOnInit(){
        // this.renderer.setElementStyle(this.el.nativeElement, 'textDecoration', this.decoration);
        console.log("class name to hover", this.className);
    }
}

//also register this dirctive in Declaration in NgModule