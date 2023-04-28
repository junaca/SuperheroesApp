import { ComponentFixture, TestBed, fakeAsync, tick } from "@angular/core/testing";

import { HeroeCardComponent } from "./heroe-card.component";
import { HeroeService } from "../../services/heroe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Extension, Result } from '../../../shared/interfaces/heroe';
import { RouterTestingModule } from "@angular/router/testing";

describe("HeroeCard", () => {

    let component: HeroeCardComponent;
    let fixture: ComponentFixture<HeroeCardComponent>;
    let heroeService: HeroeService;
    let router: Router;
    let activatedRoute: ActivatedRoute;

    beforeEach(() => {

        TestBed.configureTestingModule({
            declarations: [ HeroeCardComponent ],
            providers: [ { provide: HeroeService } ],
            imports: [ HttpClientTestingModule, RouterTestingModule ]
          })
          .compileComponents();
    

        fixture = TestBed.createComponent( HeroeCardComponent );
        component = fixture.componentInstance;
        heroeService = TestBed.inject( HeroeService );
        router = TestBed.inject( Router );
        activatedRoute = TestBed.inject( ActivatedRoute )

        component.heroe = jasmine.createSpyObj<Result>({
            id: 1011334
        })

    })

    it('navigate to /details', fakeAsync( () => {
        component.heroe.id = 1011334;
        const spyRouter = spyOn(router, 'navigate');

        component.toDetails();           

        expect(spyRouter).toHaveBeenCalledWith(['./heroe/details'], { queryParams: {id: component.heroe.id } });           
    }));

})