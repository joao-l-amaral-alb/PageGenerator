import { PageElement } from "src/app/interfaces/page-element";

export type SectionHeaderProps = {
  uniqueKey?: string;
  headerDivClass: string;
  anchorClass: string;
  spanClass: string;
  sectionTitle: string;
  childContent: PageElement[];
}