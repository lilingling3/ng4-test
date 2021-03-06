import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DictionaryEditComponent } from './dictionary-edit.component';

describe('DictionaryEditComponent', () => {
  let component: DictionaryEditComponent;
  let fixture: ComponentFixture<DictionaryEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DictionaryEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DictionaryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
