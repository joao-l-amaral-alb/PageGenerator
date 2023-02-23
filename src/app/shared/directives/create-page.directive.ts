import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[createPage]',
})
export class CreatePageDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}