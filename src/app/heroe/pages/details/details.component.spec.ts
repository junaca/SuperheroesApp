import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { DetailsComponent } from "./details.component";
import { HeroeService } from '../../services/heroe.service';

import { of } from 'rxjs';

describe("DetailsComponent", () => {

    let component: DetailsComponent;
    let fixture: ComponentFixture<DetailsComponent>;
    let heroeService: HeroeService;
    let router: Router;
    let activatedRoute: ActivatedRoute;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            declarations: [ DetailsComponent, MatProgressSpinner ],
            providers: [ { provide: HeroeService } ],

            imports: [RouterTestingModule, HttpClientTestingModule]
          })
          .compileComponents();

        fixture = TestBed.createComponent( DetailsComponent );
        component = fixture.componentInstance;
        heroeService = TestBed.inject( HeroeService ) as jasmine.SpyObj<HeroeService>;
        router = TestBed.inject( Router );
        activatedRoute = TestBed.inject( ActivatedRoute );
    } );

    it("create component", () => {
        expect(component).toBeTruthy();
    })

    it('getHero from heroService onInit', fakeAsync(() => {
        const heroId = '1011334';
        const hero = jasmine.objectContaining({
          id: heroId,
          name: 'Spider-Man',
          thumbnail: { path: 'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784', extension: 'jpg' }
        });
        activatedRoute.queryParams = of({ id: heroId });

        spyOn(component, 'getCardImage').and.stub();
        spyOn(heroeService, 'getHeroe').and.returnValue(of({ data: { results: [hero] } }) as any);
        
        component.ngOnInit();
        tick();
        
        expect(component.heroe).toEqual(hero);
      }
    ));

});