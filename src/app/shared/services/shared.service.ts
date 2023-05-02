import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor( private router: Router ) { }

  getUrlImage( url: string, size: string, extension: string ): string {
    return `${ url }/${size}.${ extension }`;
  }

  toDetails(id: string | number) {
    if(id){
      this.router.navigate(["./details"], { 
        queryParams: {
          id
        }
      });
    } 
  }

}
