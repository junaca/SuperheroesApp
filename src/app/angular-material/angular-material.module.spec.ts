import { TestBed } from '@angular/core/testing';
import { AngularMaterialModule } from './angular-material.module';

describe('AngularMaterialModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AngularMaterialModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(AngularMaterialModule);
    expect(module).toBeTruthy();
  });
});