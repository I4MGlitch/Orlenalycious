import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IceCreamCreationPageComponent } from './ice-cream-creation-page.component';

describe('IceCreamCreationPageComponent', () => {
  let component: IceCreamCreationPageComponent;
  let fixture: ComponentFixture<IceCreamCreationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IceCreamCreationPageComponent]
    });
    fixture = TestBed.createComponent(IceCreamCreationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
