import { ViewContainerRef, ViewRef } from "@angular/core";
import { CollpableProps } from "../components/aggregators/collapsable/collapsable-interface.service";
import { CollapsableComponent } from "../components/aggregators/collapsable/collapsable.component";
import { AggregatorElement } from "../interfaces/aggregator-element";
import { SingleElement } from "../interfaces/single-element";
import { CreatePageDirective } from "../shared/directives/create-page.directive";

export function setSingleObjectToListIfExists(obj: any){
    if (Array.isArray(obj)) {
         return obj;
    }
    
    let outputArray:any[] = [obj];
    
    return outputArray;
}

export function loadCompoments(data: AggregatorElement | SingleElement, createPage: CreatePageDirective, viewContainerRef: ViewContainerRef) {

    let props: any ={};
    let componentRef: any;

    switch(data.element) {
        case 'collapseSection':
            console.log("aggrComponent");
            const aggrComponent: CollpableProps = {
                sectionTitle: 'OLAASDASDASDASDSADAS',
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
            }
            props = aggrComponent;
            componentRef = viewContainerRef.createComponent<CollapsableComponent>(CollapsableComponent);
            break;
        case 'fieldset':
            console.log("singleComponent");
            break;
        default:
            console.log("errorComponent");
    }

    componentRef.instance.props = props;
    viewContainerRef.insert(componentRef.hostView, 0);

}