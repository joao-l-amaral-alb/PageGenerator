import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { CollapsableComponent } from 'src/app/components/aggregators/collapsable/collapsable.component';
import { PageContext } from 'src/app/interfaces/area-enum';
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
  data?: string;

  constructor(
    private pageGeneratorService: PageGeneratorService
  ) { }
  
  _loadComponent(data: string) {

    if(this.data && this.data!.length > 0) {
      const viewContainerRef = this.createPage.viewContainerRef;
      viewContainerRef.clear();

      const componentRef = viewContainerRef.createComponent<CollapsableComponent>(CollapsableComponent);
      componentRef.instance.props = {
        sectionTitle: 'asdsd',
        collapseSection: false,
        anchorID: 'bola',
        fieldsetID: '',
        uniqueKey: '',
        parentID: '', 
        collapsedFieldSet: false,
        headerDivClass: '',
        anchorClass: '',
        iClass: '',
        spanClass: ''
      };
    }

  }

  ngOnDestroy(): void {
    this.pageGenObservable!.unsubscribe();
  }

  ngOnInit(): void {
    this.pageGenObservable = this.pageGeneratorService.configuratorUpdated.subscribe(
      () => {
        if(this.areaContext === PageContext.Inventory) {
          this.data = this.pageGeneratorService.getInventory();
        } else {
          this.data = this.pageGeneratorService.getResult();
        }

        this._loadComponent(this.data!);
      }
    );
  }
  
}
