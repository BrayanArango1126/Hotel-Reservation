import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css'
import {register} from 'swiper/element/bundle';
register();

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent implements OnInit{
  
  constructor() { };

  images:string[] = [
    'img/paisaje1.jpg',
    'img/paisaje2.jpg',
    'img/paisaje3.jpg',
    'img/paisaje4.jpg',
    'img/paisaje5.jpg'
  ];

  ngOnInit(): void {

    const swiper = new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true,
    });
  }
}
