import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { compareToIgnoreCase } from 'src/app/helpers/generalHelper';
import { loadCompoments } from 'src/app/helpers/page-factory';
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

  @ViewChild(CreatePageDirective, {static: true}) createPage!: CreatePageDirective;

  data: string = "bolas";

  constructor() { }

  ngOnInit(): void { 
    this.props.uuid = uuid(); //Mandatory in every component
    console.log(`Component: COLLAPSABLE :: uuid => ${this.props.uuid}`);

    // loadCompoments(this.data!, this.createPage, 2);
  }

  onToggleFxSection(){
    console.log("onToggleFxSection");
    if(this.props.anchorID) {
      if(this.props.customFunc) {
        this.props.customFunc();
      } else {
        this.onToggleCollapseFxSection()
      }
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
