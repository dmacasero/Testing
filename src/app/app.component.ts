import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'skills_test';

  constructor() {
    this.registerClickEvent();
  }

  registerClickEvent() {
    addEventListener('click', async (ev: Event) => {
      if (!ev.target) {
        return;
      }
      if (!(ev.target instanceof Element)) {
        return;
      }

      const origin = ev.target.closest('a');
      if (!origin || !origin.href) {
        return;
      }

      console.log(`You clicked ${origin.href} which is an anchor tag!`);
    });
  }
}
