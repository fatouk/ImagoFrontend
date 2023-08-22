import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InscriptionclientPage } from './inscriptionclient.page';

describe('InscriptionclientPage', () => {
  let component: InscriptionclientPage;
  let fixture: ComponentFixture<InscriptionclientPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InscriptionclientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
