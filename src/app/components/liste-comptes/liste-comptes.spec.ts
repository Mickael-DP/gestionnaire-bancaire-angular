import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeComptes } from './liste-comptes';

describe('ListeComptes', () => {
  let component: ListeComptes;
  let fixture: ComponentFixture<ListeComptes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeComptes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeComptes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
