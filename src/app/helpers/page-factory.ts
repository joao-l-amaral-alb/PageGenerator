import { ViewContainerRef } from "@angular/core";
import { BasicHeaderProps } from "../components/aggregators/basic-header/basic-header-interface.service";
import { BasicHeaderComponent } from "../components/aggregators/basic-header/basic-header.component";
import { CollpableProps } from "../components/aggregators/collapsable/collapsable-interface.service";
import { CollapsableComponent } from "../components/aggregators/collapsable/collapsable.component";
import { SectionHeaderComponent } from "../components/aggregators/section-header/section-header.component";
import { SectionHeaderProps } from "../components/aggregators/section-header/section-header.service";
import { ErrorComponent } from "../components/error/error.component";
import { FieldsetProp } from "../components/single/fieldset/fieldset-interface.service";
import { FieldsetComponent } from "../components/single/fieldset/fieldset.component";
import { SideBySideFieldsetProp } from "../components/single/side-by-side-fieldset/side-by-side-fieldset-interface.service";
import { SideBySideFieldsetComponent } from "../components/single/side-by-side-fieldset/side-by-side-fieldset.component";
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
    let tempData: any;
    let aggrComponent: any;
    let singleComponent: any;

    switch(data.element) {
        case 'collapseSection':
            tempData = <AggregatorElement> data;
            aggrComponent = <CollpableProps> {
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
        case 'basicHeader':
            tempData = <AggregatorElement> data;
            aggrComponent = <BasicHeaderProps> {
                title: tempData.labeli18n!
            }
            props = aggrComponent;
            childContent = data.content;
            componentRef = viewContainerRef.createComponent<BasicHeaderComponent>(BasicHeaderComponent);
            break;
        case 'sectionHeader':
            tempData = <AggregatorElement> data;
            aggrComponent = <SectionHeaderProps> {
                sectionTitle: tempData.labeli18n!,
                headerDivClass: '',
                anchorClass: '',
                spanClass: ''
            }
            props = aggrComponent;
            childContent = data.content;
            componentRef = viewContainerRef.createComponent<SectionHeaderComponent>(SectionHeaderComponent);
            break;
        case 'fieldset':
        case 'inlineFieldset':
            singleComponent = <FieldsetProp> {
                typeOfFielset: data.element,
                content: data.content
            }
            props = singleComponent
            componentRef = viewContainerRef.createComponent<FieldsetComponent>(FieldsetComponent);
            break;
        case 'sideBySideFieldset':
            const extraComponent = <FieldsetProp> {
                typeOfFielset: data.element,
                content: data.content
            }
            singleComponent = <SideBySideFieldsetProp> {
                title: data.labeli18n,
                data: extraComponent
            }
            props = singleComponent;
            componentRef = viewContainerRef.createComponent<SideBySideFieldsetComponent>(SideBySideFieldsetComponent);
            break;
        default:
            props = singleComponent;
            componentRef = viewContainerRef.createComponent<ErrorComponent>(ErrorComponent);
    }

    componentRef.instance.props = props;
    componentRef.instance.childContent = childContent; //Only for agg components
    viewContainerRef.insert(componentRef.hostView, index);

}