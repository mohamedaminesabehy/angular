import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorieproduitComponent } from './categorieproduit.component';

describe('CategorieproduitComponent', () => {
  let component: CategorieproduitComponent;
  let fixture: ComponentFixture<CategorieproduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategorieproduitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategorieproduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
