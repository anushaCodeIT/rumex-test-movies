import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-poster-item',
  templateUrl: './poster-item.component.html',
  styleUrls: ['./poster-item.component.css'],
})
export class PosterItemComponent implements OnInit {
  @Input() item: any;
  constructor() {}

  ngOnInit(): void {}
}
