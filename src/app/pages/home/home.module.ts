import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HomePageRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { GlobalComponentModule } from 'src/app/components/global-components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    GlobalComponentModule,
  ],
  declarations: [HomeComponent],
})
export class HomePageModule {}
