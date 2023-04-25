import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HeroeResponse, Result } from '../interfaces/heroe';
import { environment } from 'src/environments/environment';

import { Observable, Subject, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  private baseUrl = environment.baseUrl;
  private hash = environment.hash;
  private apikey = environment.apikey;
  private _heroes = new Subject<Result[]>();
  private _dataResult = new Subject<DataResult>();
  private _termino = new Subject<string>();

  get heroes() {
    return this._heroes.asObservable();
  }

  get dataResult() {
    return this._dataResult.asObservable();
  }

  get termino() {
    return this._termino.asObservable();
  }

  constructor( private http: HttpClient,
               private router: Router ) { }

  getSuperheroes( termino?: string, limit: number=50, offset: number=0 ): Observable<HeroeResponse> {

    let params = {
      ts: 1000,
      limit,
      offset,
      apikey: this.apikey,
      hash: this.hash
    }
    if ( termino ) {
      params = Object.assign( params, { nameStartsWith: termino } );
      this._termino.next( termino );
    }

    return this.http.get<HeroeResponse>(`${this.baseUrl}characters`, { params } )
      .pipe(
        tap ( ( resp ) => {
          this._heroes.next( resp.data.results );
          this._dataResult.next({
            offset: resp.data.offset,
            limit: resp.data.limit,
            total: resp.data.total,
            count: resp.data.count
          });
          console.log( params );
          return resp.data.results;
        }
        
        ) 
      );

  }

  getHeroe( id: string ) {

    let params = {
      ts: 1000,
      apikey: this.apikey,
      hash: this.hash
    }

    return this.http.get<HeroeResponse>(`${this.baseUrl}characters/${ id }`, { params } );
  }

  getUrlImage( url: string, size: string, extension: string ): string {
    return `${ url }/${size}.${ extension }`;
  }

  openWebside( url: string ) {
    const params = {
      ts: 1000,
      apikey: this.apikey,
      hash: this.hash
    }

    const paramString = Object.entries(params)
                          .map(([key, value]) => `${key}=${value}`)
                          .join('&');

    return `${ url }?${paramString}`;
    
  }
}

interface DataResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
}
