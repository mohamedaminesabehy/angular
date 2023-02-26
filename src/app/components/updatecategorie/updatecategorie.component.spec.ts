import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecategorieComponent } from './updatecategorie.component';

describe('UpdatcategorieComponent', () => {
  let component: UpdatecategorieComponent;
  let fixture: ComponentFixture<UpdatecategorieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecategorieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
