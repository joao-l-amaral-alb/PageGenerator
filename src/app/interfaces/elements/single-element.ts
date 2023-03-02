import { FieldsetChildProps } from "src/app/components/single/fieldset/fieldset-interface.service";

export interface SingleElement {
    element: string,
    labeli18n?: string,
    content: FieldsetChildProps[]
}