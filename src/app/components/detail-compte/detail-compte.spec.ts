import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCompte } from './detail-compte';

describe('DetailCompte', () => {
  let component: DetailCompte;
  let fixture: ComponentFixture<DetailCompte>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailCompte]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailCompte);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
