import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { debug } from 'console';
import { setSingleObjectToListIfExists } from 'src/app/helpers/page-factory';
import { v4 as uuid } from 'uuid';
import { PageContext } from '../../interfaces/area-enum';
import { PageGeneratorService } from '../../shared/services/page-generator.service';

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
  baseJson: string = '{"body": _body}';

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

  _isValidJson(input: string) {
    try{
      JSON.parse(input);
      return input;
    }catch(event:any) {
      this._snackBar.open(`${this.areaContext} :: ${event.message}`, '', {
        duration: 10000,
        panelClass: ['mat-toolbar', 'mat-warn'],
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
      });
      return;
    }
  }

  _processArraysToBaseJson(data: string): any[] {
    const listOfElements = setSingleObjectToListIfExists(data);
    const pageBaseJson = `{"body": ${listOfElements}}`;
    const baseBody = JSON.parse(pageBaseJson);

    return baseBody["body"];
  }

  
  setEditorContentDelayed = (event:any) => {
    if(this.timeout){
        clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
      if(this._isValidJson(this.content)) {
        
        const content = this._processArraysToBaseJson(this.content);

        switch (this.areaContext) {
          case PageContext.Inventory:
            this.pageGeneratorService.setInventory(content);
            this.pageGeneratorService.configuratorUpdated.next(true);
            break;
          case PageContext.Result:
            this.pageGeneratorService.setResult(content);
            this.pageGeneratorService.configuratorUpdated.next(true);
            break;
          default:
            console.warn("Area not found");
            return;
        }
      }
    }, 1000);
}


}
