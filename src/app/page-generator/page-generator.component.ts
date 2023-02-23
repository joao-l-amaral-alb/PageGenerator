import { Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { PageGeneratorService } from '../shared/page-generator.service';

@Component({
  selector: 'app-page-generator',
  templateUrl: './page-generator.component.html',
  styleUrls: ['./page-generator.component.css']
})
export class PageGeneratorComponent implements OnInit, OnDestroy {
  bodyHeight!: number;
  pageGenObservable: any;


  @ViewChild('pageArea') targetElement!: ElementRef<HTMLInputElement>;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this._setDynamicHeight();
  }

  constructor(
    private pageGeneratorService: PageGeneratorService
  ){}

  ngOnDestroy(): void {
    this.pageGenObservable.unsubcribe();
  }

  ngOnInit(): void {
    this._setDynamicHeight();
    this.pageGenObservable = this.pageGeneratorService.configuratorUpdated.subscribe(
      (data) => {
        console.log(this.pageGeneratorService.getInventory());
        console.log(this.pageGeneratorService.getResult());
      }
    );
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
