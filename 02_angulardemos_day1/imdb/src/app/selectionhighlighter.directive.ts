import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectionhighlighter]',  // for attribute
  // selector: 'appSelectionhighlighter' // for usage as element (tag)
  // selector: '.appSelectionhighlighter' // for usage as class
  inputs: ['oncolor', 'offcolor']
})
export class SelectionhighlighterDirective {
  oncolor: string;
  offcolor: string;

  constructor(elem: ElementRef) {
    elem.nativeElement.style = 'color:red';
    //elem.nativeElement.innerHTML = '<div class="jumbotron">Hello</div>';    
  }

  @HostListener("mouseover")
  whenmousover(){
    console.log("mouse over");
    console.log('oncolor : '+this.oncolor);
    console.log('offcolor : '+this.offcolor);
  }

  @HostListener("mouseout")
  whenmousout(){
    console.log("mouse out");
  }

  @HostListener("mousedown")
  whenmousdown(){
    console.log("mouse down");
  }

  @HostListener("mouseup")
  whenmousup(){
    console.log("mouse up");
  }



}
