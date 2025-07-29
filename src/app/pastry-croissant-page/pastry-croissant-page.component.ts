import { Component, AfterViewInit } from '@angular/core';

declare var Splide: any;
declare var Fancybox: any;

@Component({
  selector: 'app-pastry-croissant-page',
  templateUrl: './pastry-croissant-page.component.html',
  styleUrls: ['./pastry-croissant-page.component.css']
})
export class PastryCroissantPageComponent implements AfterViewInit {
  images = [
    '../../assets/images/Pastry Croissant/RNC 19-Edit.jpg',
    '../../assets/images/Pastry Croissant/RNC 23-Edit.jpg',
    '../../assets/images/Pastry Croissant/IMG_6457.JPG',
    '../../assets/images/Pastry Croissant/IMG_6452.JPG',
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
