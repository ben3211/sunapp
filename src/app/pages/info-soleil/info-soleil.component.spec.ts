import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoSoleilComponent } from './info-soleil.component';

describe('InfoSoleilComponent', () => {
  let component: InfoSoleilComponent;
  let fixture: ComponentFixture<InfoSoleilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoSoleilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoSoleilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
