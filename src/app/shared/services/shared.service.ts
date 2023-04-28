import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }

  getUrlImage( url: string, size: string, extension: string ): string {
    return `${ url }/${size}.${ extension }`;
  }

}
