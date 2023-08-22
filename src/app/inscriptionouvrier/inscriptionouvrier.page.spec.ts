import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionouvrierPage } from './inscriptionouvrier.page';

describe('InscriptionouvrierPage', () => {
  let component: InscriptionouvrierPage;
  let fixture: ComponentFixture<InscriptionouvrierPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InscriptionouvrierPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
