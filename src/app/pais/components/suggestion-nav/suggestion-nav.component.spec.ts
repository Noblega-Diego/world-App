import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestionNavComponent } from './suggestion-nav.component';

describe('SuggestionNavComponent', () => {
  let component: SuggestionNavComponent;
  let fixture: ComponentFixture<SuggestionNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestionNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestionNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
