import { Component, AfterViewInit } from '@angular/core';

declare var Splide: any;
declare var timeline: any;

@Component({
  selector: 'app-our-story-page',
  templateUrl: './our-story-page.component.html',
  styleUrls: ['./our-story-page.component.css']
})
export class OurStoryPageComponent implements AfterViewInit{

  ngAfterViewInit(): void {
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

     timeline(document.querySelectorAll('#timeline'), {
      mode: 'horizontal',
      visibleItems: 3,
      horizontalStartPosition: 'bottom'
    });
    }

}
