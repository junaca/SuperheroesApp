import { TestBed, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';

import { HeroeListComponent } from './heroe-list.component';
import { HeroeService } from '../../services/heroe.service';

import { of } from 'rxjs';

describe("HeroeListComponent", () => {
    let component: HeroeListComponent;
    let fixture: ComponentFixture<HeroeListComponent>;
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
            declarations: [ HeroeListComponent ],
            providers: [ { provide: HeroeService }, MatDialog ],
            imports: [ HttpClientTestingModule, MatDialogModule, MatProgressSpinnerModule ]
          })
          .compileComponents();
    
        fixture = TestBed.createComponent( HeroeListComponent );
        component = fixture.componentInstance;
        heroeService = TestBed.inject( HeroeService );
        
    } )

    it("getSuperheroes all heroes", () => {
        spyOn( heroeService, "getSuperheroes" ).and.returnValue(of({heroeResponse} as any))
        
        fixture.detectChanges();

        expect(heroeService.getSuperheroes).toHaveBeenCalled();
    })

})