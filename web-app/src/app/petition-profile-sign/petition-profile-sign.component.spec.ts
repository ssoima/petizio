import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionProfileSignComponent } from './petition-profile-sign.component';

describe('PetitionProfileSignComponent', () => {
  let component: PetitionProfileSignComponent;
  let fixture: ComponentFixture<PetitionProfileSignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionProfileSignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionProfileSignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
