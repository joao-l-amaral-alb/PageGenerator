import { Component, Input, OnInit } from '@angular/core';
import { calcBootstrap3RemainingColSize } from 'src/app/helpers/generalHelper';
import { FieldsetProp } from './fieldset-interface.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-fieldset',
  templateUrl: './fieldset.component.html',
  styleUrls: ['./fieldset.component.css']
})
export class FieldsetComponent implements OnInit, FieldsetComponent{
  @Input() props!: FieldsetProp;

  keyValueColArea: string = "";
  allowToManageSpaceToBeUsed: boolean = true;

  constructor() { }

  manageSpaceToBeUsed(contentSize: number, index: number) {
    if(!this.allowToManageSpaceToBeUsed) {
      return "";
    }
    return calcBootstrap3RemainingColSize(contentSize, index);
  }

  ngOnInit(): void {
    this.props.uuid = uuid(); //Mandatory in every component
    console.log(`Component: ${this.props.typeOfFielset.toUpperCase()} :: uuid => ${this.props.uuid}`);

    switch(this.props.typeOfFielset) {
      case "fieldset":
        this.keyValueColArea="12";
        break;
      case "inlineFieldset":
        this.keyValueColArea="6";
        break;
      default:
        this.keyValueColArea="6";
        this.allowToManageSpaceToBeUsed = false;
    }
  }
}
