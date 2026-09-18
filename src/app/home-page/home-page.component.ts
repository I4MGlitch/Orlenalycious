import { Component, AfterViewInit } from '@angular/core';
import { OUTLETS, Outlet } from '../data/outlets';
import { BLOGS, Blog } from '../data/blogs';

declare var Splide: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit {
  blogs: Blog[] = BLOGS;
  outlets: Outlet[] = OUTLETS;

  truncateText(text: string, maxLength: number = 100): string {
    if (text.length <= maxLength) {
      return text;
    }

    return text.substring(0, maxLength).trim() + '...';
  }

  brandCollaborations = [
    {
      name: 'Garuda Indonesia',
      image: '../../assets/images/collaboration/Garuda Indonesia.png',
      headline:
        'Creating a Special Merchandise for Direct Flights from Bali to Balikpapan',
      brief:
        'A thoughtfully crafted merchandise concept designed to make every journey from Bali to Balikpapan feel even more special.',
    },
    {
      name: 'Kopi Kenangan',
      image: '../../assets/images/collaboration/Kopi Kenangan.png',
      headline: 'Creating a Special Pairing & Bundling Collaboration',
      brief:
        'Curating a unique pairing and bundling experience that brings complementary flavors together in one memorable offering.',
    },
    {
      name: 'Milo',
      image: '../../assets/images/collaboration/milo.png',
      headline: 'Creating a Special Food Innovation in Collaboration with Milo',
      brief:
        'Bringing together creativity and familiar flavors through a special food innovation made in collaboration with Milo.',
    },
    {
      name: 'KitKat',
      image: '../../assets/images/collaboration/kitkat.png',
      headline:
        'Creating a Special Food Innovation in Collaboration with KitKat',
      brief:
        'Reimagining a familiar favorite into an exciting food experience through a special collaboration with KitKat.',
    },
  ];

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
        992: { padding: '10rem' },
        768: { padding: '10rem' },
        576: { padding: '3rem' },
      },
    }).mount();

    new Splide('#baked-goods-slider', {
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
          perPage: 2,
          gap: '1rem',
        },

        768: {
          perPage: 2,
          gap: '1rem',
        },

        576: {
          perPage: 1,
          fixedWidth: '78%',
          gap: '1rem',
          padding: {
            right: '22%',
          },
        },
      },
    }).mount();

    new Splide('#blog-slider', {
      type: 'slide',

      perPage: 3,
      perMove: 1,

      gap: '1.5rem',

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
          gap: '1.25rem',
        },

        992: {
          perPage: 2,
          gap: '1.25rem',
        },

        768: {
          perPage: 1,
          fixedWidth: '88%',
          gap: '1rem',
          padding: {
            right: '12%',
          },
        },

        576: {
          perPage: 1,
          fixedWidth: '88%',
          gap: '1rem',
          padding: {
            right: '12%',
          },
        },
      },
    }).mount();

    new Splide('#outlet-slider', {
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

    const collaborationSlider = document.querySelector('#collaboration-slider');

    if (collaborationSlider) {
      new Splide('#collaboration-slider', {
        type: 'slide',

        perPage: 4,
        perMove: 1,

        gap: '1.5rem',

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
            gap: '1.25rem',
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
            fixedWidth: '85%',
            gap: '1rem',
          },
        },
      }).mount();
    }
  }
}
