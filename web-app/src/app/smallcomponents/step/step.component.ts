import { Component, OnInit, Input , ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
   stepId : number = 1;
   expectedId : number = 1;
   stepNumber : number = 1;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
   }

  ngOnInit() {

  }

  increment() {
    this.stepId++;
    this.expectedId++;
    this.stepNumber++;
  }

  decrement() {
    this.stepId--;
    this.expectedId--;
    this.stepNumber--;
  }

}
