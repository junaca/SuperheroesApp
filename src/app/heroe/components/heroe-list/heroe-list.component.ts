import { Component } from '@angular/core';
import { HeroeService } from '../../services/heroe.service';
import { Result } from '../../interfaces/heroe';
import { tap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from '../alert-dialog/alert-dialog.component';

@Component({
  selector: 'app-heroe-list',
  templateUrl: './heroe-list.component.html',
  styleUrls: ['./heroe-list.component.css']
})
export class HeroeListComponent {

  heroes!: Result[];
  isReady: boolean= false;

  constructor ( private heroeService: HeroeService,
                private dialog: MatDialog ) {}

  ngOnInit(): void {
    
    this.heroeService.getSuperheroes()
      .subscribe()

    this.heroeService.heroes
      .pipe(
        tap( () => { this.isReady = false } )
      )
      .subscribe( resp => {
        if( resp.length<=0 ) {
          const dialoRef = this.dialog.open( AlertDialogComponent, {
            enterAnimationDuration: "300ms",
            exitAnimationDuration: "3000ms"
          } );

          dialoRef.afterOpened().subscribe(_ => {
            setTimeout(() => {
              dialoRef.close();
            }, 2000)
          })
        } else {
          this.heroes = resp;
        }
        this.isReady = true;
      } );

  }

}
