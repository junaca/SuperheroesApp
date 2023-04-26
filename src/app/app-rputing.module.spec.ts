import { Location } from '@angular/common';
    import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
    import { RouterTestingModule } from '@angular/router/testing';
    import { Router, Routes } from '@angular/router';
    import { AppComponent } from './app.component';
    import { HeroeModule} from './heroe/heroe.module';
import { NgModule } from '@angular/core';

const routes: Routes = [{
    path: 'heroe',
    data: { preload: false },
    loadChildren: () => import('./heroe/heroe.module').then(m => m.HeroeModule)
  },
  { path: '**', redirectTo: 'heroe' }];

    describe('Router: App', () => {

      let location: Location;
      let router: Router;
      let fixture: ComponentFixture<AppComponent>;
      let loader: any;

      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [
            RouterTestingModule.withRoutes(routes),
          ],
          declarations: [AppComponent],
        });

        router = TestBed.inject(Router);
        location = TestBed.inject(Location);

        loader = TestBed.inject(NgModule);
        loader.stubbedModules = {
          'HeroeModule': HeroeModule
        };

        fixture = TestBed.createComponent(AppComponent);

        router.resetConfig([
          {
            path: 'heroe',
            loadChildren:  () => import( "./heroe/heroe.module" )
            .then( m => m.HeroeModule )
          },
          {
            path: '**',
            redirectTo: 'heroe'
          }
        ]);

        fixture = TestBed.createComponent(AppComponent);
        router.initialNavigation();
      });

      it('should create APP', () => {
        expect(fixture.componentInstance).toBeDefined();
      });

     it('should navigate to /student lazy loaded ,pdule', fakeAsync(() => {

        const loader = TestBed.inject(NgModule);
        loader.stubbedModules = {lazyModule: HeroeModule};

        router.resetConfig([
          {path: 'student', loadChildren: () => import( "./heroe/heroe.module" )
          .then( m => m.HeroeModule )},
        ]);

        router.navigate(['student'])

        tick();

        expect(location.path()).toBe('/student');
      }));
    });