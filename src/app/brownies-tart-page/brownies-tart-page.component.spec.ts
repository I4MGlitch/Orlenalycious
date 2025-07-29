import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowniesTartPageComponent } from './brownies-tart-page.component';

describe('BrowniesTartPageComponent', () => {
  let component: BrowniesTartPageComponent;
  let fixture: ComponentFixture<BrowniesTartPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrowniesTartPageComponent]
    });
    fixture = TestBed.createComponent(BrowniesTartPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
