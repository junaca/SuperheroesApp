import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { HeroeResponse, Result } from '../../shared/interfaces/heroe';
import { environment } from 'src/environments/environment';

import { Subject, Observable, tap } from 'rxjs';


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
          
          return resp;
        }
        
        ) 
      );

  }

}

interface DataResult {
  offset: number;
  limit: number;
  total: number;
  count: number;
}
