import { TestBed, ComponentFixture } from '@angular/core/testing';

import { SearchbarComponent } from './searchbar.component';
import { HeroeService } from '../../services/heroe.service';
import { Observable, Subscriber } from 'rxjs';
import { HeroeResponse } from '../../interfaces/heroe';

describe("SearchbarComponent", () => {

    let component: SearchbarComponent;
    let fixture: ComponentFixture<SearchbarComponent>;
    let heroeService: HeroeService;

    

    beforeEach( () => {
        const heroeServiceSpy = jasmine.createSpyObj("HeroeService", ["getSuperheroes"]);

        TestBed.configureTestingModule({
            declarations: [ SearchbarComponent ],
            providers: [ { provide: HeroeService, useValue: heroeServiceSpy } ]
          })
          .compileComponents();
    } )

    beforeEach( () => {

        fixture = TestBed.createComponent( SearchbarComponent );
        component = fixture.componentInstance;
        heroeService = TestBed.inject( HeroeService ) as jasmine.SpyObj<HeroeService>;
    
    } )

    it("create component", () => {
        expect( component ).toBeTruthy();
    })

    it("call getSuperheroes() of HeroeService", async () => {
        
        component.termino = "Spider";
        expect(heroeService.getSuperheroes(component.termino));
    })



} )