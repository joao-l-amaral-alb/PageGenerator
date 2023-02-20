import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { v4 as uuid } from 'uuid';

@Component({
  selector: 'app-configurator',
  templateUrl: './configurator.component.html',
  styleUrls: ['./configurator.component.css']
})
export class ConfiguratorComponent implements OnInit {

  @Input("label") componentId!: string;
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
    private _snackBar: MatSnackBar
  ) {
    this.uuid = uuid();
  }

  ngOnInit(): void {
    console.log(`Component: ${this.componentId} :: uuid => ${this.uuid}`);
  }

  onSubmit(){
    console.log("Send to service");
  }

  
  setEditorContentDelayed = (event:any) => {
    if(this.timeout){
        clearTimeout(this.timeout);
    }
    this.timeout = setTimeout(() => {
        let a = ""; 
        try{
           a = JSON.parse(this.content);
        }catch(event:any) {
          console.error(event.message);
          this._snackBar.open(`${event.message}`, '', {
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
