import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { TableElementProps, TableRow } from './table-interface.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {
  @Input() props!: TableElementProps;

  dataSource: any; /* = new MatTableDataSource([
    {"a": '1', "b": 'Hydrogen', "c": '1.0079', "d": 'H'},
    {"a": '2', "b": 'Helium', "c": '4.0026', "d": 'He'},
    {"a": '3', "b": 'Lithium', "c": ' 6.941', "d": 'Li'},
    {"a": '4', "b": 'Beryllium', "c": '9.0122', "d": 'Be'},
    /* {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'}, */
  //]);

  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  constructor() { }

  ngOnInit(): void {
    console.log(`Component: TABLE :: uuid => ${this.props.uniqueKey}`);

    if(this.props.content) {
      let rowsArray = []

      for(let content of this.props.content) {
        let rowObject:TableRow = {};
        for(let [index, header] of this.props.headers.entries()) {
          rowObject[header] = content[index];
        }
        rowsArray.push(rowObject);
      }

      this.dataSource = new MatTableDataSource(rowsArray);
    }
  }

}
