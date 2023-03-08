import { PageElement } from "src/app/interfaces/page-element";

export type BasicHeaderProps = {
  uniqueKey?: string;
  title: string;
  childContent: PageElement[];
}