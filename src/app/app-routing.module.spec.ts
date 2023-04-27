import { Location } from '@angular/common';
import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

describe('Router: App', () => {
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [AppRoutingModule, RouterTestingModule],
      declarations: [AppComponent],
    });

    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router = TestBed.inject(Router)
  });

  it('create APP', () => {
    expect(fixture.componentInstance).toBeDefined();
  });

  it('navigate to /heroe/home', fakeAsync(() => {
    router.navigate(['heroe']);
    tick();
    expect(location.path()).toBe('/heroe/home');
  }));
});