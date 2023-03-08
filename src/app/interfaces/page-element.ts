export interface    PageElement {
    element: string,
    labeli18n?: string,
    headers?: string[],
    configuration: {[key: string]: string},
    content: any
}