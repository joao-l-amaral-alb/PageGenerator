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
import { TableElementProps } from "../components/single/table/table-interface.service";
import { TableComponent } from "../components/single/table/table.component";
import { PageElement } from "../interfaces/page-element";
import { v4 as uuid } from 'uuid';

import { stringToBoolean } from "./generalHelper";

export function setSingleObjectToListIfExists(obj: any){
    if (Array.isArray(obj)) {
         return obj;
    }
    
    let outputArray:any[] = [obj];
    
    return outputArray;
}

export function loadCompoments(
    data: PageElement,
    viewContainerRef: ViewContainerRef,
    index?: number
) {

    let props: any ={};
    let componentRef: any;
    let aggrComponent: any;
    let singleComponent: any;
    switch(data.element) {
        case 'collapseSection':
            console.log("collapseSection");
            aggrComponent = <CollpableProps> {
                uniqueKey: uuid(),
                sectionTitle: data.labeli18n!,
                collapseSection: stringToBoolean(data.configuration['isCollapsed']),
                fieldsetID: '',
                parentID: '', 
                collapsedFieldSet: stringToBoolean(data.configuration['isCollapsed']),
                headerDivClass: '',
                anchorClass: '',
                iClass: '',
                spanClass: '',
                childContent: data.content
            }
            props = aggrComponent;
            componentRef = viewContainerRef.createComponent<CollapsableComponent>(CollapsableComponent);
            break;
        case 'basicHeader':
            aggrComponent = <BasicHeaderProps> {
                uniqueKey: uuid(),
                title: data.labeli18n!,
                childContent: data.content
            }
            props = aggrComponent;
            componentRef = viewContainerRef.createComponent<BasicHeaderComponent>(BasicHeaderComponent);
            break;
        case 'sectionHeader':
            aggrComponent = <SectionHeaderProps> {
                uniqueKey: uuid(),
                sectionTitle: data.labeli18n!,
                headerDivClass: '',
                anchorClass: '',
                spanClass: '',
                childContent: data.content
            }
            props = aggrComponent;
            componentRef = viewContainerRef.createComponent<SectionHeaderComponent>(SectionHeaderComponent);
            break;
        case 'fieldset':
        case 'inlineFieldset':
            singleComponent = <FieldsetProp> {
                uniqueKey: uuid(),
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
                uniqueKey: uuid(),
                title: data.labeli18n,
                data: extraComponent
            }
            props = singleComponent;
            componentRef = viewContainerRef.createComponent<SideBySideFieldsetComponent>(SideBySideFieldsetComponent);
            break;
        case 'table':
            singleComponent = <TableElementProps> {
                uniqueKey: uuid(),
                headers: data.headers,
                content: data.content
            }
            props = singleComponent;
            componentRef = viewContainerRef.createComponent<TableComponent>(TableComponent);
            break;
        default:
            props = singleComponent;
            componentRef = viewContainerRef.createComponent<ErrorComponent>(ErrorComponent);
    }

    componentRef.instance.props = props;
    viewContainerRef.insert(componentRef.hostView, index);

}