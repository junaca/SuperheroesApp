import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { SearchbarComponent } from './searchbar.component';
import { HeroeService } from '../../services/heroe.service';
import { of } from 'rxjs';
import { FormsModule } from '@angular/forms';

describe("SearchbarComponent", () => {

    let component: SearchbarComponent;
    let fixture: ComponentFixture<SearchbarComponent>;
    let heroeService: HeroeService;
    let heroeResponse = {
            data: {
            results: [
                {
                id: 1009712,
                name: "White Queen (Adrienne Frost)",
                description: "",
                modified: "1969-12-31T19:00:00-0500"
                }
            ]
            },
        }
    

    beforeEach( () => {

        TestBed.configureTestingModule({
            declarations: [ SearchbarComponent ],
            providers: [ { provide: HeroeService } ],
            imports: [ HttpClientTestingModule, FormsModule ]
          })
          .compileComponents();

        fixture = TestBed.createComponent( SearchbarComponent );
        component = fixture.componentInstance;
        heroeService = TestBed.inject( HeroeService );
    
    } )

    it("create component", () => {
        expect( component ).toBeTruthy();
    })

    it("getSuperheroes() with a name", () => {
        spyOn( heroeService, "getSuperheroes" ).and.returnValue(of({heroeResponse} as any))
        component.termino = "spid";
        component.searchHeroe();
        fixture.detectChanges()
        expect(heroeService.getSuperheroes).toHaveBeenCalled();
    })

} )