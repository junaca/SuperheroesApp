import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HeroeResponse, Result } from '../interfaces/heroe';
import { environment } from 'src/environments/environment';

import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private baseUrl = environment.baseUrl;
  private hash = environment.hash;
  private apikey = environment.apikey;
  private _heroes = new Subject<Result[]>();

  get heroes() {
    return this._heroes.asObservable();
  }

  constructor( private http: HttpClient ) { }

  getSuperheroes(): void {

    const url = `${ this.baseUrl }?ts=1000&limit=100&apikey=${ this.apikey }&hash=${ this.hash }`;
    this.http.get<HeroeResponse>( url )
      .subscribe( resp => {
        this._heroes.next( resp.data.results );
      } );

  }
  
  getSuperheroesByName( termino: string ): void {

    const url = `${ this.baseUrl }?nameStartsWith=${ termino }&ts=1000&limit=100&apikey=${ this.apikey }&hash=${ this.hash }`;
    this.http.get<HeroeResponse>( url )
      .subscribe( resp => {
        this._heroes.next( resp.data.results );
      } );

  }

  getUrlImage( url: string, extension: string ): string {
    return `${ url }/portrait_incredible.${ extension }`;
  }
}
