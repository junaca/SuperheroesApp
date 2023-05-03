import { Component } from '@angular/core';
import { Entertaiment } from '../../interfaces/entertaiment';
import { DetailsService } from '../../services/details.service';
import { ActivatedRoute } from '@angular/router';
import { tap, switchMap, catchError, of } from 'rxjs';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-entertaiment',
  templateUrl: './entertaiment.component.html',
  styleUrls: ['./entertaiment.component.css']
})
export class EntertaimentComponent {

  private _entertaiment!: Entertaiment;
  isReady: boolean = false;
  image: string = "";

  get entertaiment() {
    return this._entertaiment;
  }

  constructor( private detailsService: DetailsService,
               private sharedService: SharedService,
               private activatedRoute: ActivatedRoute ) {}

  ngOnInit(): void {
    
    this.activatedRoute.queryParams
    .pipe(
      tap( () => this.isReady = false ),
      switchMap( ({ type, id })  => {

        return this.detailsService.getEntertaiment( type, id );
      }),
      catchError( error => {
        console.log("Error", error.message)
        window.history.back()
        return of(null)
      })
    )
    .subscribe( resp => {

      if( resp ) {
        this._entertaiment = resp.data.results[0];
        this.isReady = true;

        if( this.entertaiment.thumbnail ){
          const imageUrl = this.entertaiment.thumbnail.path;
          const extension = this.entertaiment.thumbnail.extension;
          this.image = this.sharedService.getUrlImage( imageUrl, "portrait_incredible", extension )
        }
      }
    });
  }

  toDetails( id: string ) {
    this.sharedService.toDetails( id );
  }

  getHeroId( resourceUri: string ): string {
    return resourceUri.split("/").pop() || "";
  } 

}
