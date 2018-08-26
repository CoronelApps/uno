import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { TestcasesComponent }   from './testcases/testcases.component';
import { CreatetestcaseComponent } from './createtestcase/createtestcase.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: DashboardComponent },
  { path: 'testcases', component: TestcasesComponent},
  { path:  'testcases/new', component: CreatetestcaseComponent}
];

@NgModule({   
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ] 
})
export class AppRoutingModule {}
