import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

interface BlogDetail {
  category: string;
  title: string;
  image: string;
  paragraphs: string[];
  subheading?: string;
}

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css'],
})
export class BlogDetailPageComponent implements OnInit {
  blog: BlogDetail | null = null;

  private blogs: { [key: string]: BlogDetail } = {
    'orlena-cafe': {
      category: 'Orlena Cafe Jimbaran',
      title: 'A New Way to Enjoy Our #BitesofHappiness: Meet Orlena Café',
      image: 'assets/images/blog/blog-01.jpg',

      subheading: 'One Place, Many Occasions, More Happiness',

      paragraphs: [
        "After 8 years of serving accessible desserts, especially our beloved brownies, through our grab-and-go stores, we're finally taking a step further by creating a new way for you to experience and enjoy our Bites of Happiness.",
        'From catching up with friends, getting some work done over coffee, enjoying a sweet afternoon break, to simply spending time with yourself, Orlena Café is made for all kinds of moments.',
        "Designed with a trendy yet cozy ambience, the café brings a more experiential side of Orlena while staying true to the identity you've always known and loved, including our iconic pink.",
        'More than just a new place to enjoy our products, Orlena Café is designed to be a more inclusive space where everyone can feel welcome, stay a little longer, and create their own moments of happiness.',
        'And this is just the beginning.',
        "With Orlena Café Jimbaran, we're not leaving our roots behind. We're simply finding a new way to be closer to your everyday moments, one #BitesofHappiness at a time.",
      ],
    },

    'orlena-csr': {
      category: 'Orlena CSR',
      title: 'Bringing Happiness Beyond Our Brand Through Orlena CSR',
      image: 'assets/images/blog/blog-01.jpg',

      paragraphs: [
        'At Orlena, we believe #BitesofHappiness should not stop with us. It should create a circle of happiness that grows bigger and gives back to society.',
        'We bring this belief to life through Orlena CSR as our commitment to bring #BitesofHappiness closer to the community, creates meaningful impact, and hopefully inspires a cycle of giving that continues to grow.',
        'In 2025, we allocated 5% of our profit to support the reconstruction of SDN 5 Munduk, helping improve school facilities, provide educational tools, and create a better environment for children to learn and grow.',
        'We love seeing that this initiative became more than simply improving a school. It was our way of giving back to the community and the island we call home, creating an impact that, hopefully, can continue long after the project is finished.',
        'And this is something we hope to make part of Orlena’s yearly agenda: keeping our circle of happiness growing, reaching further and giving back more.',
      ],
    },
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (slug && this.blogs[slug]) {
      this.blog = this.blogs[slug];
    }
  }
}
