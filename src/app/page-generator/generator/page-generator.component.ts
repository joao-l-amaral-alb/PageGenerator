import { Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { PageContext } from 'src/app/interfaces/area-enum';

@Component({
  selector: 'app-page-generator',
  templateUrl: './page-generator.component.html',
  styleUrls: ['./page-generator.component.css']
})
export class PageGeneratorComponent implements OnInit {
  bodyHeight!: number;
  pageAreas=[PageContext.Inventory, PageContext.Result];

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._setDynamicHeight();
  }

  constructor(){}

  ngOnInit(): void {
    this._setDynamicHeight();
  }

  getBodyHeight() {
    return this.bodyHeight;
  }

  _setDynamicHeight(){
    const bottomMargin = 55;
    const desirableHeigh = window.innerHeight - bottomMargin;
    this.bodyHeight=desirableHeigh;
  }

}
