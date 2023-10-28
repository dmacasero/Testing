import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImgContainerComponent } from './img-container/img-container.component';
import { ImgCardComponent } from './img-card/img-card.component';

const COMPONENTS = [ImgContainerComponent, ImgCardComponent];

@NgModule({
  imports: [CommonModule],
  exports: [CommonModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class GlobalComponentModule {}
