import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-modal',
  templateUrl: './img-modal.component.html',
  styleUrls: ['./img-modal.component.scss'],
})
export class ImgModalComponent implements OnInit {
  @Input() image: string | undefined;

  constructor() {}

  ngOnInit(): void {}
}
