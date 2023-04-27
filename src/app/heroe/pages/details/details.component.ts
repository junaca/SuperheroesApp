import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, of, switchMap, tap } from 'rxjs';
import { HeroeService } from '../../services/heroe.service';
import { Result } from '../../interfaces/heroe';

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
               private heroeService: HeroeService,
               private router: Router ) {}

  ngOnInit(): void {
    
    this.activatedRoute.queryParams
    .pipe(
      tap( () => this.isReady = false ),
      switchMap( ({ id })  => {

        return this.heroeService.getHeroe( id );
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

    this.heroeImage =this.heroeService.getUrlImage( url, size, extension )
  }

  openWebside( url: string ) {
    return this.heroeService.openWebside( url );
  }

}
