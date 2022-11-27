import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlowWhistleComponent } from './blow-whistle.component';

describe('BlowWhistleComponent', () => {
  let component: BlowWhistleComponent;
  let fixture: ComponentFixture<BlowWhistleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlowWhistleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlowWhistleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
