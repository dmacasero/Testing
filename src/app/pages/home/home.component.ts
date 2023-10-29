import { Component, OnInit } from '@angular/core';
import { CardContent } from 'src/app/components/img-card/typings';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  cards: CardContent[] = [
    {
      img: 'assets/component-02/Image-01.jpg',
      imgX2: 'assets/component-02/Image-01@2x.jpg',
      header: 'Summer Lunch Menu By Mark Best',
      text: 'AEG ambasaddor Mark Bests summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.',
    },
    {
      img: 'assets/component-02/Image-02.jpg',
      imgX2: 'assets/component-02/Image-02@2x.jpg',
      header: 'Summer Lunch Menu By Mark Best',
      text: 'AEG ambasaddor Mark Bests summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.',
    },
    {
      img: 'assets/component-02/Image-03.jpg',
      imgX2: 'assets/component-02/Image-03@2x.jpg',
      header: 'Summer Lunch Menu By Mark Best',
      text: 'AEG ambasaddor Mark Bests summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
