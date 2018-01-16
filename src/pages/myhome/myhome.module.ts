import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyhomePage } from './myhome';

@NgModule({
  declarations: [
    MyhomePage,
  ],
  imports: [
    IonicPageModule.forChild(MyhomePage),
  ],
})
export class MyhomePageModule {}
