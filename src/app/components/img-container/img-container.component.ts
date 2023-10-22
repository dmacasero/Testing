import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-container',
  templateUrl: './img-container.component.html',
  styleUrls: ['./img-container.component.scss'],
})
export class ImgContainerComponent implements OnInit {
  content = [
    {
      type: 'img',
      data: [
        {
          img: 'assets/component-01/Image-01.jpg',
          imgX2: 'assets/component-01/Image-01@2x.jpg',
          header: '',
          text: '',
          type: '',
        },
      ],
    },
    {
      type: 'img',
      data: [
        {
          img: 'assets/component-01/Image-02.jpg',
          imgX2: 'assets/component-01/Image-02@2x.jpg',
          header: '',
          text: '',
          type: '',
        },
        {
          img: 'assets/component-01/Image-03.jpg',
          imgX2: 'assets/component-01/Image-03@2x.jpg',
          header: '',
          text: '',
          type: '',
        },
      ],
    },
    {
      type: 'text',
      data: [
        {
          header: `Answer your Body's Needs`,
          text: `The way ingredients are sourced affects the way we nourish our bodies. Author Mark Schatzer believes our body naturally devolops an appetite for the foods and nutrients it needs to be healthy, but that artificial flavourings are getting in the way. This can be reversed by focusing on high-quality ingredients and being mindful as your appetite guides you to consume according to your body's needs.`,
          type: 'header',
          img: '',
          imgX2: '',
        },
        {
          header: 'Be Mindful',
          text: `Sourcing local or organic food is a good way to start being more mindful about what you're cooking and eating.`,
          type: 'footer',
          img: '',
          imgX2: '',
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  showModal(img: string) {}
}
