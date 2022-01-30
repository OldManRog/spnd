import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddValueFormComponent } from './add-value-form.component';

describe('AddValueFormComponent', () => {
  let component: AddValueFormComponent;
  let fixture: ComponentFixture<AddValueFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddValueFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddValueFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
