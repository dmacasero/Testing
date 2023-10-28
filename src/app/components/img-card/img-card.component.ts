import { Component, Input, OnInit } from '@angular/core';
import { CardContent } from './typings';

@Component({
  selector: 'app-img-card',
  templateUrl: './img-card.component.html',
  styleUrls: ['./img-card.component.scss']
})
export class ImgCardComponent implements OnInit {
  @Input() content: CardContent | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
