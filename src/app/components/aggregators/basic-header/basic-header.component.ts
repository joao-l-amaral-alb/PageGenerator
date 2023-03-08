import { Component, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadCompoments } from 'src/app/helpers/page-factory';
import { CreatePageDirective } from 'src/app/shared/directives/create-page.directive';
import { BasicHeaderProps } from './basic-header-interface.service';

@Component({
  selector: 'app-basic-header',
  templateUrl: './basic-header.component.html',
  styleUrls: ['./basic-header.component.css']
})
export class BasicHeaderComponent implements OnInit {
  
  @Input("componentProperties") props!: BasicHeaderProps;

  @ViewChild(CreatePageDirective, {static: true}) createPage!: CreatePageDirective;

  constructor() { }

  ngOnInit(): void {
    console.log(`Component: BASICHEADER :: uuid => ${this.props.uniqueKey}`);

    const viewContainerRef: ViewContainerRef = this.createPage.viewContainerRef;
    viewContainerRef.clear();

    if(this.props.childContent){

      for(let [index, pageElementData] of this.props.childContent.entries()){
        loadCompoments(pageElementData, viewContainerRef, index);
      }

    }
  }

}
