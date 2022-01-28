import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  rateControl = new FormControl(0);
  rateValue = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
