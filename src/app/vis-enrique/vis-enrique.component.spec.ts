import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisEnriqueComponent } from './vis-enrique.component';

describe('VisEnriqueComponent', () => {
  let component: VisEnriqueComponent;
  let fixture: ComponentFixture<VisEnriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisEnriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisEnriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
