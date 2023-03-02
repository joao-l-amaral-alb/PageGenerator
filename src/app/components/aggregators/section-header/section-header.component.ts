import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SectionHeaderProps } from './section-header.service';
import { v4 as uuid } from 'uuid';
import { AggregatorElement } from 'src/app/interfaces/elements/aggregator-element';
import { SingleElement } from 'src/app/interfaces/elements/single-element';
import { loadCompoments } from 'src/app/helpers/page-factory';
import { CreatePageDirective } from 'src/app/shared/directives/create-page.directive';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  @Input("componentProperties") props!: SectionHeaderProps;
  @Input("pageElementsData") childContent: AggregatorElement[] | SingleElement[] | undefined;

  @ViewChild(CreatePageDirective, {static: true}) createPage!: CreatePageDirective;

  constructor() { }

  ngOnInit(): void {
    this.props.uniqueKey = uuid(); //Mandatory in every component
    console.log(`Component: SECTIONHEADER :: uuid => ${this.props.uniqueKey}`);

    const viewContainerRef: ViewContainerRef = this.createPage.viewContainerRef;
    viewContainerRef.clear();

    if(this.childContent){

      for(let [index, pageElementData] of this.childContent.entries()){
        loadCompoments(pageElementData, viewContainerRef, index);
      }

    }
  }

}
