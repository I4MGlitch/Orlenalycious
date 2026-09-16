import { Component } from '@angular/core';
import { BLOGS, Blog } from '../data/blogs';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.css'],
})
export class BlogPageComponent {
  blogs: Blog[] = BLOGS;
}
