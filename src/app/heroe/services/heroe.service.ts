import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HeroeResponse, Result } from '../interfaces/heroe';
import { environment } from 'src/environments/environment';

import { Observable, Subject } from 'rxjs';
import { Data, Router } from '@angular/router';

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

  getSuperheroes( termino?: string, limit: number=100, offset: number=0 ): void {

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

    this.http.get<HeroeResponse>(`${this.baseUrl}characters`, { params } )
      .subscribe( ( resp ) => {
        this._heroes.next( resp.data.results );
        this._dataResult.next({
          offset: resp.data.offset,
          limit: resp.data.limit,
          total: resp.data.total,
          count: resp.data.count
        });
        console.log( params )
      } );

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

  openWebside(  ) {
    let params = {
      ts: 1000,
      apikey: this.apikey,
      hash: this.hash
    }
    
    //this.router.navigateByUrl(`${this.baseUrl}`, { params });
  }
}

interface DataResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
}
