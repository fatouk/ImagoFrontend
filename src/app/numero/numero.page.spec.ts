import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NumeroPage } from './numero.page';

describe('NumeroPage', () => {
  let component: NumeroPage;
  let fixture: ComponentFixture<NumeroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(NumeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
