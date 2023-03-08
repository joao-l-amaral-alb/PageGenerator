import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { SectionHeaderProps } from './section-header.service';
import { loadCompoments } from 'src/app/helpers/page-factory';
import { CreatePageDirective } from 'src/app/shared/directives/create-page.directive';

@Component({
  selector: 'app-section-header',
  templateUrl: './section-header.component.html',
  styleUrls: ['./section-header.component.css']
})
export class SectionHeaderComponent implements OnInit {

  @Input("componentProperties") props!: SectionHeaderProps;

  @ViewChild(CreatePageDirective, {static: true}) createPage!: CreatePageDirective;

  constructor() { }

  ngOnInit(): void {
    console.log(`Component: SECTIONHEADER :: uuid => ${this.props.uniqueKey}`);

    const viewContainerRef: ViewContainerRef = this.createPage.viewContainerRef;
    viewContainerRef.clear();

    if(this.props.childContent){

      for(let [index, pageElementData] of this.props.childContent.entries()){
        loadCompoments(pageElementData, viewContainerRef, index);
      }

    }
  }

}
