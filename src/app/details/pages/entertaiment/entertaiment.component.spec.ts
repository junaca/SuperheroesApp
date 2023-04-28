import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntertaimentComponent } from './entertaiment.component';

describe('EntertaimentComponent', () => {
  let component: EntertaimentComponent;
  let fixture: ComponentFixture<EntertaimentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntertaimentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntertaimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
