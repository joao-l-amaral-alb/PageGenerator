export interface Collapsable {
    onCompareToIgnoreCase: (a: string, b: string) => boolean;
    isCollapsed: () => boolean;
    onToggleFxSection: () => void;
    onToggleCollapseFxSection: () => void;
}

export type CollpableProps = {
  collapseSection: boolean;
  sectionTitle: string;
  fieldsetID: string;
  uniqueKey?: string;
  parentID: string; 
  collapsedFieldSet: boolean;
  headerDivClass: string;
  anchorClass: string;
  iClass: string;
  spanClass: string;
  customFunc?: () => void;
}