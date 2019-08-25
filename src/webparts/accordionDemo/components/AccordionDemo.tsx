import * as React from 'react';
import styles from './AccordionDemo.module.scss';
import { IAccordionDemoProps, IAccordionDemoState, IFAQItem } from './IAccordionDemo.types';
import { Label } from 'office-ui-fabric-react/lib/Label';

import { FocusZone, FocusZoneDirection } from 'office-ui-fabric-react/lib/FocusZone';
import { Dropdown, IDropdownOption } from 'office-ui-fabric-react/lib/Dropdown';
import { TextField } from 'office-ui-fabric-react/lib/TextField';

import { Accordion } from '../../../controls/accordion';

import { WebPartTitle } from "@pnp/spfx-controls-react/lib/WebPartTitle";

const sampleItems = [
  {
    Langue: { Nom: 'Français' },
    Question: 'Charger des fichiers et dossiers',
    Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    Langue: { Nom: 'Français' },
    Question: 'Enregistrer un fichier',
    Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    Langue: { Nom: 'Français' },
    Question: 'Troisième exemple',
    Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    Langue: { Nom: 'Français' },
    Question: 'Quatrième exemple',
    Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    Langue: { Nom: 'Français' },
    Question: 'Cinquième exemple',
    Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    Langue: { Nom: 'Français' },
    Question: 'Sixième exemple',
    Reponse: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }
];

export default class AccordionDemo extends React.Component<IAccordionDemoProps, IAccordionDemoState> {
  /**
   * Note: I assume you're populating the list of FAQ items later, but for this sample I'm loading
   * them in the constructor
   */
  constructor(props: IAccordionDemoProps) {
    super(props);

    this.state = {
      collapsed: true,
      items: sampleItems,
      originalItems: sampleItems,
      selectedItem: '',
      categorieOption: [
        { key: 'cat1', text: 'Categorie 1' },
        { key: 'cat2', text: 'Categorie 2' },
        { key: 'cat3', text: 'Categorie 3' },
      ]
    };
  }

  public render(): React.ReactElement<IAccordionDemoProps> {
    const { items, originalItems } = this.state;
    const resultCountText = items.length === originalItems.length ? '' : ` (${items.length} of ${originalItems.length} shown)`;
    const { selectedItem } = this.state;

    return (
      <div className={styles.accordionDemo}>
        <WebPartTitle
          displayMode={this.props.displayMode}
          title={this.props.title}
          updateProperty={this.props.updateProperty}
        />
        <FocusZone direction={FocusZoneDirection.vertical}>
          {/* <Dropdown
            label="Categories"
            selectedKey={selectedItem ? selectedItem.key : undefined}
            onChange={this._onChange}
            placeholder="Selectionnez une catégorie"
            options={this.state.categorieOption}
            styles={{ dropdown: { width: 300 } }}
          />
          <TextField label={'Filtre par question' + resultCountText} onChange={this._onFilterChanged} /> */}
            {items.map((item: IFAQItem, index: number) => {
              return this._onRenderCell(item, index);
            })}

        </FocusZone>
      </div>
    );
  }

  private _onRenderCell(item: IFAQItem, index: number | undefined): JSX.Element {
    const { collapsed } = this.state;
    return (
      <Accordion title={item.Question}
        defaultCollapsed={ collapsed} className={styles.itemCell} key={index}>
        <div className={styles.itemContent}>
          <div className={styles.itemReponse}>{item.Reponse}</div>
          <div className={styles.itemIndex}>{`Langue :  ${item.Langue.Nom}`}</div>
        </div>
      </Accordion>
    );
  }

  /**
   * Handles changes to the selected category
   * Omitted for this example
   */
  private _onChange = (_event: React.FormEvent<HTMLDivElement>, item: IDropdownOption): void => {
    this.setState({ selectedItem: item });
  }

  /**
   * Handles changes for filters
   * Omitted for this example
   */
  private _onFilterChanged = (ev: React.FormEvent<HTMLInputElement>, newValue?: string) => {
    // Assume you're filtering events
    //this.setState({ filter: newValue || '' });
  }
}
