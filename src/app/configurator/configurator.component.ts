import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { debug } from 'console';
import { v4 as uuid } from 'uuid';
import { PageContext } from '../interfaces/area-enum';
import { PageGeneratorService } from '../shared/page-generator.service';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  @Input("label") areaContext!: PageContext;
  @Input("defaultValue") defaultValue!: string;

  codeMirrorOptions: any = {
    theme: 'idea',
    mode: 'application/ld+json',
    lineNumbers: true,
    lineWrapping: true,
    foldGutter: true,
    gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
    autoCloseBrackets: true,
    matchBrackets: true,
    lint: true
  };
  timeout: ReturnType<typeof setTimeout> = setTimeout(() => '', 500);

  content: any;
  uuid: string;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(
    private _snackBar: MatSnackBar,
    private pageGeneratorService: PageGeneratorService
  ) {
    this.uuid = uuid();
  }

  ngOnInit(): void {
    console.log(`Component: ${this.areaContext} :: uuid => ${this.uuid}`);
  }

  onSubmit(){
    console.log("Send to service");
  }

  
  setEditorContentDelayed = (event:any) => {
    if(this.timeout){
        clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
        try{
          const inputData = JSON.parse(this.content);
          switch (this.areaContext) {
            case PageContext.Inventory:
              this.pageGeneratorService.setInventory(inputData);
              this.pageGeneratorService.configuratorUpdated.next(true);
              break;
            case PageContext.Result:
              this.pageGeneratorService.setResult(inputData);
              this.pageGeneratorService.configuratorUpdated.next(true);
              break;
            default:
              console.warn("Area not found");
              return;
          }
        }catch(event:any) {
          this._snackBar.open(`${this.areaContext} :: ${event.message}`, '', {
            duration: 10000,
            panelClass: ['mat-toolbar', 'mat-warn'],
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
          });
          return;
        }
    }, 1000);
}


}
