import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/heroe';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent {

  @Input("heroe") heroe!: Result;
  heroeImage: string = "";

  constructor( private heroeService: HeroeService ) {}

  ngOnInit(): void {
    
    this.getCardImage()

  }

  getCardImage() {
    const url = this.heroe.thumbnail.path;
    const extension = this.heroe.thumbnail.extension;

    this.heroeImage =this.heroeService.getUrlImage( url, extension )
  }

}
