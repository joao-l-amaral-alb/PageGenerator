import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadCompoments } from 'src/app/helpers/page-factory';
import { AggregatorElement } from 'src/app/interfaces/elements/aggregator-element';
import { SingleElement } from 'src/app/interfaces/elements/single-element';
import { CreatePageDirective } from 'src/app/shared/directives/create-page.directive';
import { v4 as uuid } from 'uuid';
import { BasicHeaderProps } from './basic-header-interface.service';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.css']
})
export class BasicHeaderComponent implements OnInit {
  
  @Input("componentProperties") props!: BasicHeaderProps;
  @Input("pageElementsData") childContent: AggregatorElement[] | SingleElement[] | undefined;

  @ViewChild(CreatePageDirective, {static: true}) createPage!: CreatePageDirective;

  constructor() { }

  ngOnInit(): void {
    this.props.uniqueKey = uuid();
    console.log(`Component: BASICHEADER :: uuid => ${this.props.uniqueKey}`);

    const viewContainerRef: ViewContainerRef = this.createPage.viewContainerRef;
    viewContainerRef.clear();

    if(this.childContent){

      for(let [index, pageElementData] of this.childContent.entries()){
        loadCompoments(pageElementData, viewContainerRef, index);
      }

    }
  }

}
