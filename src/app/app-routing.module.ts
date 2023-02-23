import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { AppResolver } from './app-resolver.service';
import { AppComponent } from './app.component';
import { PageGeneratorComponent } from './page-generator/generator/page-generator.component';

const appRoutes: Routes = [
  { path: "", component: AppComponent, 
    // children: [
    //   { path: ":orderId", component: PageGeneratorComponent, resolve: {metaData: AppResolver}}
    // ] 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
