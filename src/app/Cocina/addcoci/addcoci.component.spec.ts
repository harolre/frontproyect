import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcociComponent } from './addcoci.component';

describe('AddcociComponent', () => {
  let component: AddcociComponent;
  let fixture: ComponentFixture<AddcociComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddcociComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
