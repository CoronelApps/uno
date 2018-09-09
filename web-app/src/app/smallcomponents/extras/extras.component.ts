import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactory, ComponentFactoryResolver, ElementRef } from '@angular/core';
import { ChipsComponent } from "../chips/chips.component";
import { Chip } from "../../model/chip"

@Component({
  selector: 'app-extras',
  templateUrl: './extras.component.html',
  styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {
  @ViewChild("chips", { read: ViewContainerRef }) chips;
  @ViewChild("chipControl", { read: ElementRef }) chipControl: ElementRef;
  @ViewChild("chipInput", { read: ElementRef }) chipInput: ElementRef;
  @ViewChild("chipContainer", { read: ElementRef }) chipContainer: ElementRef;
  chipsComponentFactory: ComponentFactory<ChipsComponent>;
  mdlColors: string[] = ['red', 'pink', 'purple', 'blue', 'indigo', 'light-blue', 'green', 'yellow', 'orange'];
  tone: string[] = ['', '-50', '-100', '-200', '-300', '-400', '-500', '-600', '-700', '-800', '-900'];
  defaultChips: Chip[] = [new Chip(1, "test plan", [], false), new Chip(2, "test script", [], false)];

  constructor(public viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.chipsComponentFactory = this.componentFactoryResolver.resolveComponentFactory(ChipsComponent);
  }

  addChip(event) {
    if (event.key === "Enter") {
      let viewContainerRef = this.chips.createComponent(this.chipsComponentFactory);
      viewContainerRef.instance.element = this.chipInput.nativeElement.value.substring(0, this.chipInput.nativeElement.value.indexOf(':'));
      viewContainerRef.instance.properties = this.chipInput.nativeElement.value.substring(this.chipInput.nativeElement.value.indexOf(':') + 1);
      viewContainerRef.instance.colorClass = this.mdlColors[Math.floor(Math.random() * this.mdlColors.length)] + this.tone[Math.floor(Math.random() * this.tone.length)];
      this.chipContainer.nativeElement.style = "border: 1px solid rgb(124,77,255); border-radius: 15px;padding:  8px;";
    }
  }

  searchChips() {
    var val = this.chipInput.nativeElement.value.toLowerCase();
    this.chipControl.nativeElement.innerHTML = "";
    for (var c in this.defaultChips) {
      var text = this.defaultChips[c].name.toLowerCase();

      if (text.indexOf(val) !== -1) {
        let sugestion = document.createElement("div");    // Create with DOM
        sugestion.innerHTML = text;
        sugestion.className = "sugestion";
        this.chipControl.nativeElement.append(sugestion);
      }
    }
  }
}
