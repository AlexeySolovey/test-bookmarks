import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBookmarksComponent } from './form-bookmarks.component';

describe('FormBookmarksComponent', () => {
  let component: FormBookmarksComponent;
  let fixture: ComponentFixture<FormBookmarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormBookmarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBookmarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
