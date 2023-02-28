import { Component, Input, OnInit } from '@angular/core';
import { KeyUpValueDownTableProps } from './keyUpValueDownTable-interface.service';

@Component({
  selector: 'app-keyUpValueDownTable',
  templateUrl: './keyUpValueDownTable.component.html',
  styleUrls: ['./keyUpValueDownTable.component.css']
})
export class KeyUpValueDownTableComponent implements OnInit, KeyUpValueDownTableComponent{
  @Input("componentProperties") props!: KeyUpValueDownTableProps;

  constructor() { }

  ngOnInit(): void {
  }

}
