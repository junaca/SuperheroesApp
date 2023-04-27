import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { PaginatorComponent } from "./paginator.component";
import { HeroeService } from '../../services/heroe.service';
import { AngularMaterialModule } from 'src/app/angular-material/angular-material.module';

import { of } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

describe("PaginatorComponent", () => {

    let component: PaginatorComponent;
    let fixture: ComponentFixture<PaginatorComponent>;
    let heroeService: HeroeService;
    let pageEvent: PageEvent = {
        length: 500,
        pageIndex: 1,
        pageSize: 50,
        previousPageIndex: 0
    };
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
            declarations: [ PaginatorComponent ],
            providers: [ { provide: HeroeService } ],
            imports: [ HttpClientTestingModule, AngularMaterialModule ]
          })
          .compileComponents();

        fixture = TestBed.createComponent( PaginatorComponent );
        component = fixture.componentInstance;
        heroeService = TestBed.inject( HeroeService );
    
    } )

    it("create component", () => {
        expect( component ).toBeTruthy();
    })

    it("update page info and call getSuperheroes", () => {
        const spy = spyOn( heroeService, "getSuperheroes").and.returnValue(of(heroeResponse) as any)
        const offset = pageEvent.pageIndex * pageEvent.pageSize;
        component.updateDisplayedPages(pageEvent);

        expect(component.currentPageIndex).toBe(pageEvent.pageIndex);
        expect(component.pageIndex).toBe(pageEvent.pageIndex);
        expect(component.pageSize).toBe(pageEvent.pageSize);
        expect(spy).toHaveBeenCalledWith(component.termino, component.pageSize, offset);
    })

} )