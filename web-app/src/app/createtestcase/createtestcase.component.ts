import { Component, OnInit, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { StepComponent  } from '../smallcomponents/step/step.component';
import { StepcontainerComponent} from '../smallcomponents/stepcontainer/stepcontainer.component'

@Component({
  selector: 'app-createtestcase',
  templateUrl: './createtestcase.component.html',
  styleUrls: ['./createtestcase.component.css']
})
export class CreatetestcaseComponent implements OnInit {
  @ViewChild("appStep", { read: ViewContainerRef }) stepsContainer;
  stepComponentFactory: ComponentFactory<StepComponent>;

  constructor(public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.stepComponentFactory = this.componentFactoryResolver.resolveComponentFactory(StepComponent);
  }
 
  onClickMe() {
    this.stepsContainer.createComponent(this.stepComponentFactory);
  }

}
