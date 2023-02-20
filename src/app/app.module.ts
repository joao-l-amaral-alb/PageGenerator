import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { PageGeneratorService } from './shared/page-generator.service';
import { PageGeneratorComponent } from './page-generator/page-generator.component';
import { InventoryComponent } from './page-generator/layout/inventory/inventory.component';
import { ResultComponent } from './page-generator/layout/result/result.component';
import { CollapsableComponent } from './components/aggregators/collapsable/collapsable.component';
import { KeyUpValueDownTableComponent } from './components/single/fieldset/keyUpValueDownTable.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PageGeneratorComponent,
    InventoryComponent,
    ResultComponent,
    CollapsableComponent,
    KeyUpValueDownTableComponent,
    ConfiguratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    CodemirrorModule,
    FormsModule,
    MatSnackBarModule
  ],
  providers: [PageGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
