import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { AppResolver } from './app-resolver.service';
import { PageGeneratorService } from './shared/page-generator.service';
import { PageGeneratorComponent } from './page-generator/page-generator.component';
import { InventoryComponent } from './components/layout/inventory/inventory.component';
import { ResultComponent } from './components/layout/result/result.component';
import { CollapsableComponent } from './components/aggregators/collapsable/collapsable.component';
import { FieldsetComponent } from './components/single/fieldset/fieldset.component';

@NgModule({
  declarations: [
    AppComponent,
    PageGeneratorComponent,
    InventoryComponent,
    ResultComponent,
    CollapsableComponent,
    FieldsetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AppResolver,PageGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
