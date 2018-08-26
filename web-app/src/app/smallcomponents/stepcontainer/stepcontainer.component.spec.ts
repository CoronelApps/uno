import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepcontainerComponent } from './stepcontainer.component';

describe('StepcontainerComponent', () => {
  let component: StepcontainerComponent;
  let fixture: ComponentFixture<StepcontainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepcontainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepcontainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
