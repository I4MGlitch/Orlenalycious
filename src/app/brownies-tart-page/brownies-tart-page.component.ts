import { Component, AfterViewInit } from '@angular/core';

declare var Splide: any;
declare var Fancybox: any;

@Component({
  selector: 'app-brownies-tart-page',
  templateUrl: './brownies-tart-page.component.html',
  styleUrls: ['./brownies-tart-page.component.css']
})
export class BrowniesTartPageComponent implements AfterViewInit {
  images = [
    '../../assets/images/Brownies Tart/DSC00664.jpg',
    "../../assets/images/Brownies Tart/DSC00737.jpg",
    "../../assets/images/Brownies Tart/DSC00748.jpg",
    "../../assets/images/Brownies Tart/DSC03968.jpg",
    "../../assets/images/Brownies Tart/DSC03990-Edit.jpg",
    "../../assets/images/Brownies Tart/DSC04003-Edit-2.jpg",
    "../../assets/images/Brownies Tart/DSC04053-Edit.jpg",
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
