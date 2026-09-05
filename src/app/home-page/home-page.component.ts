import { Component, AfterViewInit } from '@angular/core';

declare var Splide: any;
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements AfterViewInit {
  truncateText(text: string, maxLength: number = 100): string {
    if (text.length <= maxLength) {
      return text;
    }

    return text.substring(0, maxLength).trim() + '...';
  }
  blogs = [
    {
      category: 'Orlena Cafe Jimbaran',
      title: 'A New Way to Enjoy Our #BitesofHappiness: Meet Orlena Café',
      excerpt:
        "After 8 years of serving accessible desserts, especially our beloved brownies, through our grab-and-go stores, we're finally taking a step further by creating a new way for you to experience and enjoy our Bites of Happiness.",
      image: 'assets/images/blog/blog-01.jpg',
      slug: 'orlena-cafe',
    },
    {
      category: 'Orlena CSR',
      title: 'Bringing Happiness Beyond Our Brand Through Orlena CSR',
      excerpt:
        'At Orlena, we believe #BitesofHappiness should not stop with us. It should create a circle of happiness that grows bigger and gives back to society.',
      image: 'assets/images/blog/blog-01.jpg',
      slug: 'orlena-csr',
    },
    {
      category: 'Orlena CSR',
      title: 'Bringing Happiness Beyond Our Brand Through Orlena CSR',
      excerpt:
        'At Orlena, we believe #BitesofHappiness should not stop with us. It should create a circle of happiness that grows bigger and gives back to society.',
      image: 'assets/images/blog/blog-01.jpg',
      slug: 'orlena-csr',
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
      gap: '1.25rem',
      arrows: false,
      pagination: false,
      padding: {
        left: 0,
        right: '8%',
      },
      breakpoints: {
        1200: {
          perPage: 3,
          gap: '1rem',
          padding: {
            right: '8%',
          },
        },

        992: {
          perPage: 2.5,
          gap: '1rem',
          padding: {
            right: '10%',
          },
        },

        768: {
          perPage: 2.25,
          gap: '1rem',
          padding: {
            right: '12%',
          },
        },

        576: {
          perPage: 1.25,
          gap: '1rem',
          padding: {
            right: '18%',
          },
        },
      },
    }).mount();

    new Splide('#blog-slider', {
      type: 'slide',
      perPage: 3,
      gap: '1.5rem',
      arrows: false,
      pagination: false,

      breakpoints: {
        992: {
          perPage: 2,
          gap: '1.25rem',
        },

        768: {
          perPage: 1.15,
          gap: '1rem',
          padding: {
            right: '15%',
          },
        },

        576: {
          perPage: 1.1,
          gap: '1rem',
          padding: {
            right: '15%',
          },
        },
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
        },
      },
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
        },
      },
    }).mount();

    new Splide('#outlet-slider', {
      perPage: 4,
      focus: 0,
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
        },
      },
    }).mount();

    new Splide('#collab-slider', {
      perPage: 4,
      focus: 0,
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
        },
      },
    }).mount();
  }
}
