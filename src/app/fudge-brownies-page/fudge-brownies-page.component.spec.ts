import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FudgeBrowniesPageComponent } from './fudge-brownies-page.component';

describe('FudgeBrowniesPageComponent', () => {
  let component: FudgeBrowniesPageComponent;
  let fixture: ComponentFixture<FudgeBrowniesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FudgeBrowniesPageComponent]
    });
    fixture = TestBed.createComponent(FudgeBrowniesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
