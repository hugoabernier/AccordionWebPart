import { IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { DisplayMode } from '@microsoft/sp-core-library';

export interface IAccordionDemoProps {
  faqList: string;
  title: string;
  displayMode: DisplayMode;
  updateProperty: (value: string) => void;
}

export interface IAccordionDemoState {
  items: IFAQItem[];
  originalItems: IFAQItem[];
  selectedItem: any;
  categorieOption: IDropdownOption[];
  collapsed: boolean;
}

export interface ILangue {
  Nom: string;
}
export interface IFAQItem {
  Question: string;
  Reponse: string;
  Langue: ILangue;
}
