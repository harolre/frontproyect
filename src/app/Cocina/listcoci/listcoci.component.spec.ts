import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcociComponent } from './listcoci.component';

describe('ListcociComponent', () => {
  let component: ListcociComponent;
  let fixture: ComponentFixture<ListcociComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListcociComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListcociComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
