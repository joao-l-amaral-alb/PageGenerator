import { Component, Input, OnInit } from '@angular/core';
import { KeyUpValueDownTableProps } from './keyUpValueDownTable-interface.service';

@Component({
  selector: 'app-keyUpValueDownTable',
  templateUrl: './keyUpValueDownTable.component.html',
  styleUrls: ['./keyUpValueDownTable.component.css']
})
export class KeyUpValueDownTableComponent implements OnInit, KeyUpValueDownTableComponent{
  @Input("componentProperties") props!: KeyUpValueDownTableProps[];

  constructor() { }

  calcBootstrap3RemainingColSize(contentSize: number, index: number) {
    let numCol = "col-sm-3";
    const contentSizeRest = contentSize % 4;

    if(contentSizeRest == 3 && index == (contentSize-1) || 
        (contentSizeRest == 2 && (index == (contentSize -1 ) || index == (contentSize -2)))) {
          numCol = "col-sm-6";
    } else if (contentSizeRest == 1 && index==(contentSize-1)) {
      numCol = "col-sm-12";
    }

    return numCol;
  }

  ngOnInit(): void {}

}
