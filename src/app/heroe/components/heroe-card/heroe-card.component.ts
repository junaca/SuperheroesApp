import { Component, Input } from '@angular/core';
import { Result } from '../../interfaces/heroe';
import { HeroeService } from '../../services/heroe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-card',
  templateUrl: './heroe-card.component.html',
  styleUrls: ['./heroe-card.component.css']
})
export class HeroeCardComponent {

  @Input("heroe") heroe!: Result;
  heroeImage: string = "";

  constructor( private heroeService: HeroeService,
               private router: Router ) {}

  ngOnInit(): void {
    
    this.getCardImage()

  }

  getCardImage() {
    const url = this.heroe.thumbnail.path;
    const size = "portrait_incredible";
    const extension = this.heroe.thumbnail.extension;

    this.heroeImage =this.heroeService.getUrlImage( url, size, extension )
  }

  toDetails() {
    const id = this.heroe.id;
    if(id){
      this.router.navigate(["./heroe/details"], { 
        queryParams: {
          id: this.heroe.id
        }
      });
    } 
    

  }

}
