import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastryCroissantPageComponent } from './pastry-croissant-page.component';

describe('PastryCroissantPageComponent', () => {
  let component: PastryCroissantPageComponent;
  let fixture: ComponentFixture<PastryCroissantPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastryCroissantPageComponent]
    });
    fixture = TestBed.createComponent(PastryCroissantPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
