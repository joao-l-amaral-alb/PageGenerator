import { SingleElement } from "./single-element";

export interface AggregatorElement{
    element: string,
    labeli18n?: string,
    configuration: {[key: string]: string},
    content: AggregatorElement[] | SingleElement[]
}