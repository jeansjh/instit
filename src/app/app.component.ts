import { Component } from '@angular/core';
import { ICarouselItem } from './shared/components/cariusel/Icarousel-item.metadata';
import { CAROUSEL_DATA_ITEMS } from './shared/components/cariusel/carousel.const';
import {MenuItem} from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public carouselData: ICarouselItem[] = CAROUSEL_DATA_ITEMS;

  title = 'proyectinstituto';
}
