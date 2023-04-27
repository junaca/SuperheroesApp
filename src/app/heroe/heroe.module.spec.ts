import { TestBed } from '@angular/core/testing';
import { HeroeModule } from './heroe.module';

describe('HeroeModule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HeroeModule],
    });
  });

  it('initializes', () => {
    const module = TestBed.inject(HeroeModule);
    expect(module).toBeTruthy();
  });
});