import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
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
               private heroeService: HeroeService ) {}

  ngOnInit(): void {

    this.activatedRoute.queryParams
    .pipe(
      tap( () => this.isReady = false ),
      switchMap( ({ id })  => {
        console.log( id )
        return this.heroeService.getHeroe( id );
      })
    )
    .subscribe( resp => {
      this._heroe = resp.data.results[0];
      this.isReady = true;
      this.getCardImage();
      console.log("Heroe ready")
    });

  }

  getCardImage() {
    console.log("Image charge")
    const url = this._heroe.thumbnail.path;
    const size = "portrait_incredible";
    const extension = this._heroe.thumbnail.extension;

    this.heroeImage =this.heroeService.getUrlImage( url, size, extension )
  }

  openWebside(  ) {
    this.heroeService.openWebside();
  }

}
