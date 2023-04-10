export interface FieldsetProp {
  uniqueKey?: string;
  typeOfFielset: string;
  content: FieldsetChildProps[];
}

export interface FieldsetChildProps {
  valueClazz: string;
  colSize: number;
  key: string;
  value: string;
}