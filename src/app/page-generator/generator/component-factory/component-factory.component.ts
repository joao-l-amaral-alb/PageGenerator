import { Component, Input, OnInit, TemplateRef, ViewChild, ViewContainerRef, ViewRef } from '@angular/core';
import { Subscription } from 'rxjs';
import { loadCompoments } from 'src/app/helpers/page-factory';
import { AggregatorElement } from 'src/app/interfaces/aggregator-element';
import { PageContext } from 'src/app/interfaces/area-enum';
import { SingleElement } from 'src/app/interfaces/single-element';
import { CreatePageDirective } from 'src/app/shared/directives/create-page.directive';
import { PageGeneratorService } from 'src/app/shared/services/page-generator.service';

@Component({
  selector: 'app-component-factory',
  templateUrl: './component-factory.component.html',
  styleUrls: ['./component-factory.component.css']
})
export class ComponentFactoryComponent implements OnInit {
  pageGenObservable: Subscription | undefined;
  @Input("label") areaContext!: PageContext;
  
  @ViewChild(CreatePageDirective, {static: true}) createPage!: CreatePageDirective;
  @ViewChild('templateref') templateref: TemplateRef<{}> | undefined;

  pageElementsData: AggregatorElement[] | SingleElement[] | undefined;

  constructor(
    private pageGeneratorService: PageGeneratorService
  ) { }
  
  ngOnDestroy(): void {
    this.pageGenObservable!.unsubscribe();
  }

  ngOnInit(): void {
    this.pageGenObservable = this.pageGeneratorService.configuratorUpdated.subscribe(
      () => {
        if(this.areaContext === PageContext.Inventory) {
          this.pageElementsData = <AggregatorElement[] | SingleElement[]> this.pageGeneratorService.getInventory();
        } else {
          this.pageElementsData = this.pageGeneratorService.getResult();
        }
        
        const viewContainerRef: ViewContainerRef = this.createPage.viewContainerRef;
        viewContainerRef.clear();

        if(this.pageElementsData){

          for(let pageElementData of this.pageElementsData){
            loadCompoments(pageElementData, this.createPage, viewContainerRef);
          }
          
        }
      }
    );
  }
  
}
