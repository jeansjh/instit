import { Component, OnInit, Input } from '@angular/core';
import { CAROUSEL_DATA_ITEMS } from './carousel.const';
import { ICarouselItem } from './Icarousel-item.metadata';

@Component({
  selector: 'app-cariusel',
  templateUrl: './cariusel.component.html',
  styleUrls: ['./cariusel.component.scss']
})
export class CariuselComponent implements OnInit {

  /**
   *  Custom propiedades
   */

   @Input() height = 550;
   @Input() isFullScreen = false;
   @Input() items: ICarouselItem[] = [];

  /**
   * Final propertis
   */


   public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;
   public finalHeight: string | number = 0;
   public currentPosition = 0;

  constructor() {
     this.finalHeight = this.isFullScreen ? '100vh' : `${this.height}px`;
    }

  ngOnInit(): void {
    this.items.map( ( i, index ) => {
      i.id = index;
      i.marginLeft = 0;
    } );
  }

  setCurrentPosition(position: number) {
    this.currentPosition = position;
    /**
     * this.items.find(i => i.id === 0).marginLeft = -100 * position;
     */

    let item = this.items.find(i => i.id === 0);
    if(item){
    item.marginLeft = -100 * position;

    }
  }

  setNext() {
    let finalPercentage = 0;
    let nextPosition = this.currentPosition + 1;
    if (nextPosition <= this.items.length - 1) {
      finalPercentage = -100 * nextPosition;
    } else {
      nextPosition = 0;
    }
    /**
     * this.items.find(i => i.id === 0).marginLeft = finalPercentage;
     */
    let item = this.items.find(i => i.id === 0);
    if(item){
    item.marginLeft = finalPercentage;
    }

    this.currentPosition = nextPosition;
  }

  setBack() {
    let finalPercentage = 0;
    let backPosition = this.currentPosition  - 1;
    if (backPosition >= 0) {
      finalPercentage = -100 * backPosition;
    } else {
      backPosition = this.items.length - 1;
      finalPercentage = -100 * backPosition;
    }
    /**
     * this.items.find(i => i.id === 0).marginLeft = finalPercentage;
     */

    let item = this.items.find(i => i.id === 0);
    if(item){
    item.marginLeft = finalPercentage;
    }

    this.currentPosition = backPosition;

  }

}
