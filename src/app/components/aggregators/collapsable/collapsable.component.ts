import { Component, Input, OnInit } from '@angular/core';
import { compareToIgnoreCase } from 'src/app/helpers/string-helper';
import { v4 as uuid } from 'uuid';
import { Collapsable, CollpableProps } from './collapsable-interface.service';

@Component({
  selector: 'app-collapsable',
  templateUrl: './collapsable.component.html',
  styleUrls: ['./collapsable.component.css']
})
export class CollapsableComponent implements OnInit, Collapsable {
  @Input("componentProperties") props!: CollpableProps;

  constructor() { }

  ngOnInit(): void { 
    this.props.uuid = uuid(); //Mandatory in every component
    console.log(`Component: COLLAPSABLE :: uuid => ${this.props.uuid}`);
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
