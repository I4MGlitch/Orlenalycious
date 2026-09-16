import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { BLOGS, Blog } from '../data/blogs';

@Component({
  selector: 'app-blog-detail-page',
  templateUrl: './blog-detail-page.component.html',
  styleUrls: ['./blog-detail-page.component.css'],
})
export class BlogDetailPageComponent implements OnInit {
  blog: Blog | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');

    if (!slug) {
      return;
    }

    this.blog = BLOGS.find((blog) => blog.slug === slug) || null;
  }
}
