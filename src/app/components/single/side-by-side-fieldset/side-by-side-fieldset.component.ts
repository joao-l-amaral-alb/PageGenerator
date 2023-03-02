import { Component, Input, OnInit } from '@angular/core';
import { SideBySideFieldsetProp } from './side-by-side-fieldset-interface.service';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-side-by-side-fieldset',
  templateUrl: './side-by-side-fieldset.component.html',
  styleUrls: ['./side-by-side-fieldset.component.css']
})
export class SideBySideFieldsetComponent implements OnInit {
  @Input() props!: SideBySideFieldsetProp;

  constructor() { }

  ngOnInit(): void {
    this.props.uuid = uuid(); //Mandatory in every component
    console.log(`Component: SIDEBYSIDEFIELDSET :: uuid => ${this.props.uuid}`);
  }

}
