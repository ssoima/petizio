import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionsPageComponent } from './petitions-page.component';

describe('PetitionsPageComponent', () => {
  let component: PetitionsPageComponent;
  let fixture: ComponentFixture<PetitionsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
