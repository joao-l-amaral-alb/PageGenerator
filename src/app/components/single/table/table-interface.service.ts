export interface TableElementProps {
    uniqueKey?: string,
    headers: string[],
    content: [{[key: string]: string}],
}

export type TableRow = {
    [key: string]: string
}

/* 
export interface TableElement {
    key: string,
    value: string
}   */