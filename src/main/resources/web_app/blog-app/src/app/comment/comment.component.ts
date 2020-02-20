import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDiscard() {
    this.router.navigate(['/posts']);
  }

  onSave() {
  }

}
