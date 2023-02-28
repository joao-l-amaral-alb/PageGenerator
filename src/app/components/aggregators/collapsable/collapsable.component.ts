import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { compareToIgnoreCase } from 'src/app/helpers/generalHelper';
import { loadCompoments } from 'src/app/helpers/page-factory';
import { AggregatorElement } from 'src/app/interfaces/elements/aggregator-element';
import { SingleElement } from 'src/app/interfaces/elements/single-element';
import { CreatePageDirective } from 'src/app/shared/directives/create-page.directive';
import { v4 as uuid } from 'uuid';
import { Collapsable, CollpableProps } from './collapsable-interface.service';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css']
})
export class CollapsableComponent implements OnInit, Collapsable {
  @Input("componentProperties") props!: CollpableProps;
  @Input("pageElementsData") childContent: AggregatorElement[] | SingleElement[] | undefined;

  @ViewChild(CreatePageDirective, {static: true}) createPage!: CreatePageDirective;
 
  constructor() { }

  ngOnInit(): void { 
    this.props.uniqueKey = uuid(); //Mandatory in every component
    console.log(`Component: COLLAPSABLE :: uuid => ${this.props.uniqueKey}`);

    const viewContainerRef: ViewContainerRef = this.createPage.viewContainerRef;
    viewContainerRef.clear();

    if(this.childContent){

      for(let [index, pageElementData] of this.childContent.entries()){
        loadCompoments(pageElementData, viewContainerRef, index);
      }

    }
  }

  onToggleFxSection(){
    console.log("onToggleFxSection");
    if(this.props.customFunc) {
      this.props.customFunc();
    } else {
      this.onToggleCollapseFxSection()
    }
  }

  onCompareToIgnoreCase(a: string, b: string){
    return compareToIgnoreCase(a, b) != 0;
  }

  isCollapsed(){
    return this.props.collapsedFieldSet;
  }

  onToggleCollapseFxSection() {
    this.props.collapseSection= !this.props.collapseSection;
    this.props.collapsedFieldSet= !this.props.collapsedFieldSet;
  }

}
