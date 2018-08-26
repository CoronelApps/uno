import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LeftmenuComponent } from './leftmenu/leftmenu.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TestcasesComponent } from './testcases/testcases.component';
import { CreatetestcaseComponent } from './createtestcase/createtestcase.component';
import { StepComponent } from './smallcomponents/step/step.component';
import { StepcontainerComponent } from './smallcomponents/stepcontainer/stepcontainer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LeftmenuComponent,
    DashboardComponent,
    TestcasesComponent,
    CreatetestcaseComponent,
    StepComponent,
    StepcontainerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [StepComponent]
})
export class AppModule { }
