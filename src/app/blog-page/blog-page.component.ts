import { Component } from '@angular/core';

interface Blog {
  category: string;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
}

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent {
  blogs: Blog[] = [
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
  ];
}
