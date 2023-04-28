import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeResponse } from 'src/app/shared/interfaces/heroe';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private baseUrl = environment.baseUrl;
  private hash = environment.hash;
  private apikey = environment.apikey;

  constructor( private http: HttpClient ) { }

  getHeroe( id: string ) {

    let params = {
      ts: 1000,
      apikey: this.apikey,
      hash: this.hash
    }

    return this.http.get<HeroeResponse>(`${this.baseUrl}characters/${ id }`, { params } );
  }


  getEntertimentUrl( url: string ) {
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
