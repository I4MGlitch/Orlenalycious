import { Component, AfterViewInit } from '@angular/core';

import { OUTLETS, Outlet } from '../data/outlets';

declare var Splide: any;

@Component({
  selector: 'app-our-story-page',
  templateUrl: './our-story-page.component.html',
  styleUrls: ['./our-story-page.component.css'],
})
export class OurStoryPageComponent implements AfterViewInit {
  outlets: Outlet[] = OUTLETS;

  ngAfterViewInit(): void {
    const outletSlider = document.querySelector('#about-outlet-slider');

    if (!outletSlider) {
      return;
    }

    new Splide('#about-outlet-slider', {
      type: 'slide',

      perPage: 4,
      perMove: 1,

      gap: '1.25rem',

      arrows: false,
      pagination: false,

      drag: true,
      snap: true,

      speed: 400,

      flickPower: 300,
      flickMaxPages: 1,

      dragMinThreshold: {
        touch: 5,
        mouse: 0,
      },

      breakpoints: {
        1200: {
          perPage: 3,
          gap: '1rem',
        },

        992: {
          perPage: 2.5,
          gap: '1rem',
        },

        768: {
          perPage: 1.6,
          gap: '1rem',
        },

        576: {
          perPage: 1,
          fixedWidth: '84%',
          gap: '1rem',
        },
      },
    }).mount();
  }
}
