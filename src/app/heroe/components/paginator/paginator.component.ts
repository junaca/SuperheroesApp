import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { HeroeService } from '../../services/heroe.service';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements PageEvent {

  pageIndex: number = 0;
  previousPageIndex?: number | undefined;
  length: number = 1000;
  pageSize = 100;
  currentPageIndex = 0;
  displayedPages: number[] = [];
  termino?: string;

  constructor( private heroeService: HeroeService ) { }


  ngOnInit(): void {
    
    this.heroeService.dataResult
      .subscribe( resp => {
        this.length = resp.total;
        console.log(this.length)
        this.pageSize = resp.count;
      } );
    this.heroeService.termino
      .subscribe( termino => {
        this.termino = termino;
      } )
    
  }

  get lastPageIndex() {
    console.log(Math.floor(this.length / this.pageSize))
    return Math.floor(this.length / this.pageSize);
  }

  updateDisplayedPages( e: PageEvent): void {

    this.length = e.length;
    this.currentPageIndex = e.pageIndex;
    this.pageIndex  = e.pageIndex;
    this.pageSize = e.pageSize;

    if (this.pageIndex > this.lastPageIndex) {
      this.pageIndex = this.lastPageIndex;
    }

    const offset = this.pageIndex * this.pageSize;

    console.log( this.pageIndex );
    this.heroeService.getSuperheroes( this.termino, this.pageSize , offset );

  }


}
