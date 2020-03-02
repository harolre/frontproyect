import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcociComponent } from './editcoci.component';

describe('EditcociComponent', () => {
  let component: EditcociComponent;
  let fixture: ComponentFixture<EditcociComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditcociComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
