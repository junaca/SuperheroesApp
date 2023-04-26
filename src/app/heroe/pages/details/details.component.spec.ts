import { TestBed, ComponentFixture } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { DetailsComponent } from "./details.component";
import { HeroeService } from '../../services/heroe.service';
import { MatProgressSpinner, MatProgressSpinnerModule } from '@angular/material/progress-spinner';

describe("DetailsComponent", () => {

    let component: DetailsComponent;
    let fixture: ComponentFixture<DetailsComponent>;
    let heroeService: HeroeService;
    let router: Router;
    let activatedRoute: ActivatedRoute;

    beforeEach( () => {
        const heroeServiceSpy = jasmine.createSpyObj("HeroeService", ["getSuperheroes"]);

        TestBed.configureTestingModule({
            declarations: [ DetailsComponent, MatProgressSpinner ],
            providers: [ { provide: [HeroeService] } ],
            imports: [RouterTestingModule, HttpClientTestingModule]
          })
          .compileComponents();

        fixture = TestBed.createComponent( DetailsComponent );
        component = fixture.componentInstance;
        heroeService = TestBed.inject( HeroeService ) as jasmine.SpyObj<HeroeService>;
        router = TestBed.inject( Router );
        activatedRoute = TestBed.inject( ActivatedRoute );
    } );

    //TODO: No funciona el request
    it('return id heroe from url', async () => {
        //spyOn(activatedRoute, "params")

        await fixture.ngZone?.run(  () => {
             router.navigate(["./heroe/details?=id=1011334"]);
            fixture.detectChanges();
            
            let idParam: string | undefined;

            activatedRoute.params
                .subscribe( ({id}) =>  {
                    idParam = id;
            })
            expect(idParam).toBe("1011334")
           
        } )
    });
    

});