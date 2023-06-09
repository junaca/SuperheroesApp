import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Result } from '../../../shared/interfaces/heroe';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent {

  @Input("heroe") heroe!: Result;
  heroeImage: string = "";

  constructor( private sharedService: SharedService ) {}

  ngOnInit(): void {
    
    this.getCardImage()

  }

  getCardImage() {
    const url = this.heroe.thumbnail.path;
    const size = "portrait_incredible";
    const extension = this.heroe.thumbnail.extension;

    this.heroeImage =this.sharedService.getUrlImage( url, size, extension )
  }

  toDetails() {
    this.sharedService.toDetails(this.heroe.id);
  }

}
