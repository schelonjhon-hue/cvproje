import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tatiller } from './tatiller';

describe('Tatiller', () => {
  let component: Tatiller;
  let fixture: ComponentFixture<Tatiller>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tatiller]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tatiller);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
