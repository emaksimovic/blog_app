import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute) {
   }

  ngOnInit() {
  }

  onUpdate() {
    this.router.navigate([':id/edit'], { relativeTo: this.route});
  }

  onDelete() {
  }

}
