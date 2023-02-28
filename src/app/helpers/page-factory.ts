import { ViewContainerRef } from "@angular/core";
import { CollpableProps } from "../components/aggregators/collapsable/collapsable-interface.service";
import { CollapsableComponent } from "../components/aggregators/collapsable/collapsable.component";
import { KeyUpValueDownTableComponent } from "../components/single/fieldset/keyUpValueDownTable.component";
import { AggregatorElement } from "../interfaces/elements/aggregator-element";
import { SingleElement } from "../interfaces/elements/single-element";
import { stringToBoolean } from "./generalHelper";

export function setSingleObjectToListIfExists(obj: any){
    if (Array.isArray(obj)) {
         return obj;
    }
    
    let outputArray:any[] = [obj];
    
    return outputArray;
}

export function loadCompoments(
    data: AggregatorElement | SingleElement,
    viewContainerRef: ViewContainerRef,
    index?: number
) {

    let props: any ={};
    let componentRef: any;
    let childContent: any;

    switch(data.element) {
        case 'collapseSection':
            console.log("aggrComponent");
            const tempData = <AggregatorElement> data;
            const aggrComponent: CollpableProps = {
                sectionTitle: tempData.labeli18n!,
                collapseSection: stringToBoolean(tempData.configuration['isCollapsed']),
                fieldsetID: '',
                parentID: '', 
                collapsedFieldSet: stringToBoolean(tempData.configuration['isCollapsed']),
                headerDivClass: '',
                anchorClass: '',
                iClass: '',
                spanClass: ''
            }
            props = aggrComponent;
            childContent = data.content;
            componentRef = viewContainerRef.createComponent<CollapsableComponent>(CollapsableComponent);
            break;
        case 'fieldset':
            console.log("singleComponent");
            props = data.content;
            componentRef = viewContainerRef.createComponent<KeyUpValueDownTableComponent>(KeyUpValueDownTableComponent);
            break;
        default:
            console.log("errorComponent");
    }

    componentRef.instance.props = props;
    componentRef.instance.childContent = childContent;
    viewContainerRef.insert(componentRef.hostView, index);

}