import { ComponentFixture, TestBed } from "@angular/core/testing";
import { HttpClientTestingModule } from "@angular/common/http/testing";

import { HomeComponent } from "./home.component";
import { SearchbarComponent } from '../../components/searchbar/searchbar.component';
import { HeroeListComponent } from "../../components/heroe-list/heroe-list.component";
import { AngularMaterialModule } from '../../../angular-material/angular-material.module';
import { TopBotonComponent } from "../../components/top-boton/top-boton.component";
import { PaginatorComponent } from "../../components/paginator/paginator.component";

describe("HomeComponent", () => {

    let component:HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;

    beforeEach( async () => {
        await TestBed.configureTestingModule({
            declarations: [ HomeComponent, SearchbarComponent, 
                            HeroeListComponent, TopBotonComponent,
                            PaginatorComponent ],
            imports: [ HttpClientTestingModule, AngularMaterialModule ],
          })
          .compileComponents();

        fixture = TestBed.createComponent(HomeComponent );
        component = fixture.componentInstance;       
    } );

    it("create component", () => {
        expect(component).toBeTruthy();
    })

});