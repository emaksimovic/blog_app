import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enter-text',
  templateUrl: './enter-text.component.html',
  styleUrls: ['./enter-text.component.css']
})
export class EnterTextComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onDiscard() {
    this.router.navigate(['/posts']);
  }

  onSave() {
  }

}
