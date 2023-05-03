import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HeroeResponse, Result } from 'src/app/shared/interfaces/heroe';
import { environment } from 'src/environments/environment';
import { Entertaiment, EntertaimentResponse } from '../interfaces/entertaiment';
import { SharedService } from 'src/app/shared/services/shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {

  private baseUrl = environment.baseUrl;
  private hash = environment.hash;
  private apikey = environment.apikey;
  private params = {
    ts: 1000,
    apikey: this.apikey,
    hash: this.hash
  }

  constructor( private http: HttpClient,
               private sharedService: SharedService ) { }

  getHeroe( id: string ) {
    return this.http.get<HeroeResponse>(`${this.baseUrl}characters/${ id }`, { params: this.params } );
  }

  getEntertimentUrl( url: string ) {

    const paramString = Object.entries(this.params)
                          .map(([key, value]) => `${key}=${value}`)
                          .join('&');

    return `${ url }?${paramString}`;
    
  }

  getEntertaiment( type: string, id: string ): Observable<EntertaimentResponse> {
    return this.http.get<EntertaimentResponse>(`${this.baseUrl}${type}/${ id }`, { params: this.params } );
  }
}
