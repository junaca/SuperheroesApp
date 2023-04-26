/* import { TestBed, ComponentFixture } from '@angular/core/testing';

import { HeroeListComponent } from './heroe-list.component';
import { HeroeService } from '../../services/heroe.service';

describe("HeroeListComponent", () => {
    let component: HeroeListComponent;
    let fixture: ComponentFixture<HeroeListComponent>;
    let heroeService: HeroeService;

    beforeEach( async () => {
        const heroeServiceSpy = jasmine.createSpyObj("HeroeService", ["getSuperheroes"]);

        await TestBed.configureTestingModule({
            declarations: [ HeroeListComponent ],
            providers: [ { provide: HeroeService, useValue: heroeServiceSpy } ]
          })
          .compileComponents();
    } )

    beforeEach( () => {

        fixture = TestBed.createComponent( HeroeListComponent );
        component = fixture.componentInstance;
        heroeService = TestBed.inject( HeroeService );
    
    } )

    it("getSuperheroes", () => {
        heroeService.getSuperheroes().subscribe(
          ( heroes ) => {
            expect(heroes).toBeInstanceOf(Object)
          }  
        );
    })

}) */