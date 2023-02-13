import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { WorkFlowDefinition } from '../interfaces/workflow-definition';

@Component({
  selector: 'app-page-generator',
  templateUrl: './page-generator.component.html',
  styleUrls: ['./page-generator.component.css']
})
export class PageGeneratorComponent implements OnInit {

  metaData!: WorkFlowDefinition;
  constructor(
    private route: ActivatedRoute
  ){}

  ngOnInit() {
    this.route.data.subscribe(
      (data: Data) => {
        this.metaData = data['metaData'];
        console.log(this.metaData.dataModel);
        console.log(this.metaData.pageModel);
      }
    );
  }

}
