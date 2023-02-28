import { SingleElement } from "./single-element";

export interface AggregatorElement {
    element: string,
    labeli18n: string,
    configuration: JSON,
    content: AggregatorElement[] | SingleElement[]
}