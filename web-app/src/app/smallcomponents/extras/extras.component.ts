import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ChipsComponent } from "../chips/chips.component";

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {
  @ViewChild("chips", { read: ViewContainerRef }) chipsContainer;
  @ViewChild("chipInput", {read: ElementRef}) tref: ElementRef;
  chipsComponentFactory: ComponentFactory<ChipsComponent>;
  mdlColors : string [] = ['red','pink','purple','blue','indigo','light-blue','green','yellow','orange'];
  tone : string [] = ['','-50','-100','-200','-300','-400','-500','-600','-700','-800','-900'];

  constructor(public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.chipsComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ChipsComponent);
  }

  addChip(event){
    if (event.key === "Enter") {
      let viewContainerRef = this.chipsContainer.createComponent(this.chipsComponentFactory);
      viewContainerRef.instance.element = this.tref.nativeElement.value.substring(0, this.tref.nativeElement.value.indexOf(':'));
      viewContainerRef.instance.properties = this.tref.nativeElement.value.substring(this.tref.nativeElement.value.indexOf(':') + 1);
      viewContainerRef.instance.colorClass = this.mdlColors[Math.floor(Math.random() * this.mdlColors.length)] + this.tone[Math.floor(Math.random() * this.tone.length)];
    }
    // 
  }

}
