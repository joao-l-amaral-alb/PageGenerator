import { AfterViewInit, Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { WorkFlowDefinition } from '../interfaces/workflow-definition';

@Component({
  selector: 'app-page-generator',
  templateUrl: './page-generator.component.html',
  styleUrls: ['./page-generator.component.css']
})
export class PageGeneratorComponent implements OnInit {
  bodyHeight!: number;

  @ViewChild('pageArea') targetElement!: ElementRef<HTMLInputElement>;

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
