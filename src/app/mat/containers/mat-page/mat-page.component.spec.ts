import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatPageComponent } from './mat-page.component';

describe('MatPageComponent', () => {
  let component: MatPageComponent;
  let fixture: ComponentFixture<MatPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MatPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MatPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
