import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, switchMap, tap } from 'rxjs';
import { Result } from '../../../shared/interfaces/heroe';
import { DetailsService } from '../../services/details.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  private _heroe!: Result;
  heroeImage: string = "";
  isReady: boolean = false;

  get heroe() {
    return this._heroe;
  }

  constructor( private activatedRoute: ActivatedRoute,
               private detailsService: DetailsService,
               private sharedService: SharedService,
               private router: Router ) {}

  ngOnInit(): void {
    
    this.activatedRoute.queryParams
    .pipe(
      tap( () => this.isReady = false ),
      switchMap( ({ id })  => {

        return this.detailsService.getHeroe( id );
      }),
      catchError( error => {
        console.log("Error", error.message)
        window.history.back()
        return of(null)
      })
    )
    .subscribe( resp => {

      if( resp ) {
        this._heroe = resp.data.results[0];
        this.isReady = true;
        this.getCardImage();
      }
    });

  }

  getCardImage() {
    const url = this._heroe.thumbnail.path;
    const size = "portrait_incredible";
    const extension = this._heroe.thumbnail.extension;

    this.heroeImage =this.sharedService.getUrlImage( url, size, extension )
  }

  getEntertimentUrl( url: string ) {
    return this.detailsService.getEntertimentUrl( url );
  }

  toEntertaiment() {
      const id = this.heroe.id;
      if(id){
        this.router.navigate(["./heroe/details"], { 
          queryParams: {
            id: this.heroe.id
          }
        });
      } 
  }

}
