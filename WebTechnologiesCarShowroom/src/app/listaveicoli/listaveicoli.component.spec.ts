import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaveicoliComponent } from './listaveicoli.component';

describe('ListaveicoliComponent', () => {
  let component: ListaveicoliComponent;
  let fixture: ComponentFixture<ListaveicoliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaveicoliComponent]
    });
    fixture = TestBed.createComponent(ListaveicoliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
