import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterItemComponent } from './poster-item.component';

describe('PosterItemComponent', () => {
  let component: PosterItemComponent;
  let fixture: ComponentFixture<PosterItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PosterItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PosterItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
