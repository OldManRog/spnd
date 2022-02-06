import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpndDashboardComponent } from './spnd-dashboard.component';

describe('SpndDashboardComponent', () => {
  let component: SpndDashboardComponent;
  let fixture: ComponentFixture<SpndDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpndDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpndDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
