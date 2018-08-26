import { Component, OnInit, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'app-stepcontainer',
  templateUrl: './stepcontainer.component.html',
  styleUrls: ['./stepcontainer.component.css']
})
export class StepcontainerComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef,) { }

  ngOnInit() {
  }

}
