import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormInputComponent } from './user-form-input.component';

describe('UserFormInputComponent', () => {
  let component: UserFormInputComponent;
  let fixture: ComponentFixture<UserFormInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFormInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
