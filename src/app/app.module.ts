import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { PageGeneratorService } from './shared/services/page-generator.service';
import { PageGeneratorComponent } from './page-generator/generator/page-generator.component';
import { CollapsableComponent } from './components/aggregators/collapsable/collapsable.component';
import { KeyUpValueDownTableComponent } from './components/single/fieldset/keyUpValueDownTable.component';
import { ConfiguratorComponent } from './page-generator/configurator/configurator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { CreatePageDirective } from './shared/directives/create-page.directive';
import { ComponentFactoryComponent } from './page-generator/generator/component-factory/component-factory.component';

@NgModule({
  declarations: [
    AppComponent,
    PageGeneratorComponent,
    CollapsableComponent,
    KeyUpValueDownTableComponent,
    ConfiguratorComponent,
    CreatePageDirective,
    ComponentFactoryComponent
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
