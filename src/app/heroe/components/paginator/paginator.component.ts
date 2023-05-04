import { ChangeDetectorRef, Component } from '@angular/core';
import { MatPaginator, MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { HeroeService } from '../../services/heroe.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent extends MatPaginator implements PageEvent {

  previousPageIndex?: number | undefined;
  currentPageIndex: number = 1;
  displayedPages: number[] = [];
  termino?: string;

  constructor( private heroeService: HeroeService,
               private customPaginatorIntl: MatPaginatorIntl, 
               private changeDetectorRef: ChangeDetectorRef ) {
    super( customPaginatorIntl, changeDetectorRef);
  }

  override ngOnInit(): void {
    
    this.heroeService.dataResult
      .subscribe( resp => {
        this.length = resp.total;
        this.pageSize = resp.count;
      } );

    this.heroeService.termino
      .subscribe( termino => {
        this.termino = termino;
      } )
    
  }

  get lastPageIndex() {
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

    this.heroeService.getSuperheroes( this.termino, this.pageSize , offset )
      .subscribe();
    
  }

}
