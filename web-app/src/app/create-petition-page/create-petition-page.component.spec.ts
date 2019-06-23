import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionProfilePageComponent } from './petition-profile-page.component';

describe('PetitionProfilePageComponent', () => {
  let component: PetitionProfilePageComponent;
  let fixture: ComponentFixture<PetitionProfilePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionProfilePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionProfilePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
