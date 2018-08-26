import { Component, OnInit, Input , ComponentFactoryResolver} from '@angular/core';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {
   stepId = 0;
   expectedId = 0;
   stepNumber = 0;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
    
   }


  ngOnInit() {
    /*this.stepId = this.stepId + 1;
    this.expectedId += 1;
    this.stepNumber += 1;*/
  }

}
