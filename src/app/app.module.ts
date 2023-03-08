import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from  '@angular/common/http';
import { PageGeneratorService } from './shared/services/page-generator.service';
import { PageGeneratorComponent } from './page-generator/generator/page-generator.component';
import { CollapsableComponent } from './components/aggregators/collapsable/collapsable.component';
import { ConfiguratorComponent } from './page-generator/configurator/configurator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { FormsModule } from '@angular/forms';
import { CreatePageDirective } from './shared/directives/create-page.directive';
import { ComponentFactoryComponent } from './page-generator/generator/component-factory/component-factory.component';
import { BasicHeaderComponent } from './components/aggregators/basic-header/basic-header.component';
import { SectionHeaderComponent } from './components/aggregators/section-header/section-header.component';
import { FieldsetComponent } from './components/single/fieldset/fieldset.component';
import { SideBySideFieldsetComponent } from './components/single/side-by-side-fieldset/side-by-side-fieldset.component';
import { ErrorComponent } from './components/error/error.component';
import { TableComponent } from './components/single/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    PageGeneratorComponent,
    CollapsableComponent,
    FieldsetComponent,
    ConfiguratorComponent,
    CreatePageDirective,
    ComponentFactoryComponent,
    BasicHeaderComponent,
    SectionHeaderComponent,
    SideBySideFieldsetComponent,
    ErrorComponent,
    TableComponent
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
    MatSnackBarModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [PageGeneratorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
