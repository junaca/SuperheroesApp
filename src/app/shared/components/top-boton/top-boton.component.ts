import { Component } from '@angular/core';
import { fromEvent, interval, throttle, throttleTime } from 'rxjs';

@Component({
  selector: 'app-top-boton',
  templateUrl: './top-boton.component.html',
  styleUrls: ['./top-boton.component.css']
})
export class TopBotonComponent {

  showButton: boolean = false;
  scroll = fromEvent( window, "scroll" );

  constructor() {

    window.addEventListener( "scroll", () => this.windowScroll() );
    
  }

  ngOnDestroy() {
    window.removeEventListener('scroll', () => this.windowScroll() );
  }

  windowScroll() {
    if( window.scrollY > 100 ) {
      this.showButton = true;
    } else if ( window.scrollY == 0) {
      this.showButton = false;
    }
  }

  scrollToTop(){
    window.scroll({
      top: 0,
      behavior: "smooth"
    })
  }
}
