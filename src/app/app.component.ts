import { Component } from '@angular/core';
import { PageContext } from './interfaces/area-enum';
import { PageArea } from './interfaces/page-area';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PageGen_ang';

  pageAreas: PageArea[] = [
    {
      pageContext: PageContext.Inventory,
      defaultValue: "{}"
    },
    {
      pageContext: PageContext.Result,
      defaultValue: "{}"
    }
  ];
}
