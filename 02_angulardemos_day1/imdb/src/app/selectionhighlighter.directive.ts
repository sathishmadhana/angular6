import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSelectionhighlighter]'  // for attribute
  // selector: 'appSelectionhighlighter' // for usage as element (tag)
  // selector: '.appSelectionhighlighter' // for usage as class
})
export class SelectionhighlighterDirective {

  constructor(elem: ElementRef) {
    elem.nativeElement.style = 'color:red';
    //elem.nativeElement.innerHTML = '<div class="jumbotron">Hello</div>';
  }

  @HostListener("mouseover")
  whenmousover(){
    console.log("mouse over");
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
