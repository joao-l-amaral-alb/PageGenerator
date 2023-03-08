export interface TableElementProps {
    uuid?: string,
    headers: string[],
    content: TableElement[]
}

export interface TableElement {
    key: string,
    value: string
}  