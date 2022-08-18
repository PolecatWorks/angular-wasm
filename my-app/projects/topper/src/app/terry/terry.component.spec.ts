import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerryComponent } from './terry.component';

describe('TerryComponent', () => {
  let component: TerryComponent;
  let fixture: ComponentFixture<TerryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TerryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
