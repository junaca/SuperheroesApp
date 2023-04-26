import { Component } from '@angular/core';
import { Result } from '../../interfaces/heroe';
import { HeroeService } from '../../services/heroe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  //@ViewChild("inputSearch") inputSearch!: ElementRef;
  private heroes!: Result[];
  termino: string | undefined;

  constructor( private heroeService: HeroeService ) {}

  searchHeroe() {

    this.heroeService.getSuperheroes( this.termino || undefined )
      .subscribe();

  }

}
