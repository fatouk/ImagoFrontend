import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerifierotpPage } from './verifierotp.page';

describe('VerifierotpPage', () => {
  let component: VerifierotpPage;
  let fixture: ComponentFixture<VerifierotpPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VerifierotpPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
