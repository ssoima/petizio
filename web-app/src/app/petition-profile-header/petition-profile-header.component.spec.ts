import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PetitionProfileHeaderComponent } from './petition-profile-header.component';

describe('PetitionProfileHeaderComponent', () => {
  let component: PetitionProfileHeaderComponent;
  let fixture: ComponentFixture<PetitionProfileHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PetitionProfileHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PetitionProfileHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
