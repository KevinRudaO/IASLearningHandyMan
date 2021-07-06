import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculathoursComponent } from './components/calculathours/calculathours.component';
import { ServicereportComponent } from './components/servicereport/servicereport.component';

const routes: Routes = [{path:'',component:ServicereportComponent},{path:'calculate',component:CalculathoursComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
