import { Component, AfterViewInit } from '@angular/core';

declare var Splide: any;
declare var Fancybox: any;

@Component({
  selector: 'app-ice-cream-creation-page',
  templateUrl: './ice-cream-creation-page.component.html',
  styleUrls: ['./ice-cream-creation-page.component.css']
})
export class IceCreamCreationPageComponent {
  images = [
    '../../assets/images/RNC 88.jpg',
  ];
  ngAfterViewInit(): void {
    const main = new Splide('#detail-main-slider', {
      type: 'slide',
      heightRatio: 1,
      pagination: false,
      arrows: false,
      cover: true,
      gap: 10,
    });

    const thumbnails = new Splide('#detail-thumbnail-slider', {
      rewind: true,
      fixedWidth: 100,
      fixedHeight: 100,
      isNavigation: true,
      gap: 10,
      pagination: false,
      arrows: false,
      cover: true,
      breakpoints: {
        640: {
          fixedWidth: 60,
          fixedHeight: 60,
        },
      },
    });

    main.sync(thumbnails);
    main.mount();
    thumbnails.mount();

    // Init Fancybox
    Fancybox.bind('[data-fancybox="gallery"]', {
      click: "close",
      Toolbar: false,
      animated: true,
      dragToClose: true,
      Images: {
        zoom: true,
      },
    });

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
        perPage: 3,
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
  }
}
