import { Component, Input, OnInit } from '@angular/core';
import { Tag } from '../shared/tag.model';

@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  @Input() x = 0;
  @Input() y = 0;
  @Input() epc = '';

  constructor() { }

  ngOnInit() {
  }

}
