import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { DetailsComponent } from "./details.component";
import { HeroeService } from '../../services/heroe.service';

describe("DetailsComponent", () => {

    let component: DetailsComponent;
    let fixture: ComponentFixture<DetailsComponent>;
    let heroeService: HeroeService;
    let router: Router;
    let activatedRoute: ActivatedRoute;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
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

    it("create component", () => {
        expect(component).toBeTruthy();
    })

    /* it('return id heroe from url', fakeAsync( () => {
        const id = undefined;

        router.navigate([`./heroe/details?id=${id}`]);        
        fixture.detectChanges();
            
        expect(activatedRoute.url).toEqual(of("./heroe/home"));
    })); */
    

});