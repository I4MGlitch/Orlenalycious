import { Component, AfterViewInit } from '@angular/core';

declare var Splide: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    new Splide('#main-slider', {
    arrows: false,
    type: 'loop',
    perPage: 1,
    gap: '1rem',
    padding: '30rem',
    breakpoints: {
      1600: { padding: '20rem' },
      1400: { padding: '20rem' },
      1200: { padding: '15rem' },
      992:  { padding: '10rem' },
      768:  { padding: '10rem' },
      576:  { padding: '3rem' },
    },
    }).mount();

    new Splide('#brownie-slider', {
    type: 'loop',
    perPage: 3,
    focus: 'left',
    arrows: false,
    pagination: false,
    padding: {
      left: 0,
      right: '15%', // tampilkan setengah dari slide ke-4
    },
    breakpoints: {
      1200: {
        perPage: 2,
        padding: {
          right: '10%',
        },
      },
      992: {
        perPage: 2,
        padding: {
          right: '15%',
        },
      },
      768: {
        perPage: 2,
        padding: {
          right: '15%',
        },
      },
      576: {
        perPage: 1,
        padding: {
          right: '20%',
        },
      }
    }
  }).mount();

  new Splide('#tart-slider', {
    type: 'loop',
    perPage: 3,
    focus: 'left',
    arrows: false,
    pagination: false,
    padding: {
      left: 0,
      right: '15%', // tampilkan setengah dari slide ke-4
    },
    breakpoints: {
      1200: {
        perPage: 2,
        padding: {
          right: '10%',
        },
      },
      992: {
        perPage: 2,
        padding: {
          right: '15%',
        },
      },
      768: {
        perPage: 1,
        padding: {
          right: '25%',
        },
      },
      576: {
        perPage: 1,
        padding: {
          right: '20%',
        },
      }
    }
  }).mount();

  new Splide('#outlet-slider', {
      perPage: 4,
      focus:0,
      omitEnd: true,
      gap: '1rem',
      arrows: false,
      pagination: false,
      breakpoints: {
        992: {
          perPage: 3,
        },
        768: {
          perPage: 2.5,
        },
        576: {
          perPage: 2.5,
        }
      }
    }).mount();

    new Splide('#collab-slider', {
      perPage: 4,
      focus:0,
      omitEnd: true,
      gap: '1rem',
      arrows: false,
      pagination: true,
      breakpoints: {
        992: {
          perPage: 3,
        },
        768: {
          perPage: 2.5,
        },
        576: {
          perPage: 2.5,
        }
      }
    }).mount();
  
  }
}
