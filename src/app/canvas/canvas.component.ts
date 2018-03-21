import { Component, OnInit } from '@angular/core';
import { Tag } from '../shared/tag.model';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.scss']
})
export class CanvasComponent implements OnInit {
  // Floor Plan Image Information
  backgroundUrl = '../../assets/boutique-floor-plan_939x763.png';
  imageWidth = 939;
  imageHeight = 763;
  imageScale = 56; // Pixels per Meter

  // 0,0 point in Pixels (from bottom left of image)
  originPointX = 45;
  originPointY = 58;

  // Scaled Container Information
  containerWidth = 600;
  containerHeight = Math.round((this.imageHeight / this.imageWidth) * this.containerWidth);
  containerRatio = (this.containerWidth / this.imageWidth);
  containerScale = this.imageScale * this.containerRatio;

  tags: Tag[] = [
    new Tag(0, 0, 'asdf111111111', 'now'),
    new Tag(0.5, 0.5, 'asdf111111111', 'now'),
    new Tag(1, 1, 'asdf111111112', 'now'),
    new Tag(11.7, 10.2, 'asdf111111113', 'now'),
    new Tag(11.7, 10.3, 'asdf111111114', 'now'),
    new Tag(11.4, 10.2, 'asdf111111115', 'now'),
    new Tag(11.5, 10.1, 'asdf111111116', 'now'),
    new Tag(11.9, 10.2, 'asdf111111117', 'now'),
    new Tag(2, 10.2, 'asdf111111118', 'now'),
    new Tag(2.3, 10.1, 'asdf111111119', 'now'),
    new Tag(2.5, 10.2, 'asdf11111111A', 'now')
  ];

  constructor() { }

  ngOnInit() {
  }

  getXinPixels(xInMeters) {
    return (this.originPointX * this.containerRatio) + this.convertToPixels(xInMeters);
  }

  getYinPixels(yInMeters) {
    return this.containerHeight - (this.originPointY * this.containerRatio) - this.convertToPixels(yInMeters);
  }

  // Converts tag absolute position into scaled pixels
  convertToPixels(distance) {
    return Math.round(distance * this.containerScale);
  }

}
