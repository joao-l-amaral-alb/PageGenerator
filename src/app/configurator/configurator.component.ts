import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  @Input("label") componentId!: string;
  @Input("defaultValue") defaultValue!: string;
  uuid: string;
  isOnFocus=false;
  
  constructor(
    private elementRef: ElementRef
  ) {
    this.uuid = uuid();
  }

  ngOnInit(): void {
    console.log(`Component: ${this.componentId} :: uuid => ${this.uuid}`);
  }

  onFocus() {
    this.isOnFocus = !this.isOnFocus;
  }

  onSubmit(){
    console.log("Send to service");
  }
}
