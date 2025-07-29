import { Component, AfterViewInit } from '@angular/core';

declare var Splide: any;
declare var Fancybox: any;

@Component({
  selector: 'app-fudge-brownies-page',
  templateUrl: './fudge-brownies-page.component.html',
  styleUrls: ['./fudge-brownies-page.component.css']
})
export class FudgeBrowniesPageComponent implements AfterViewInit {
  images = [
    '../../assets/images/Fudge Brownies/DSC04198.jpg',
    '../../assets/images/Fudge Brownies/DSC04199.jpg',
    '../../assets/images/Fudge Brownies/DSC04201.jpg',
    '../../assets/images/Fudge Brownies/DSC07764.jpg',
    '../../assets/images/Fudge Brownies/DSC08075.jpg',
    '../../assets/images/Fudge Brownies/DSC08078.jpg',
    '../../assets/images/Fudge Brownies/DSC08100.jpg',
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
