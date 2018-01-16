import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MypublicationPage } from './mypublication';

@NgModule({
  declarations: [
    MypublicationPage,
  ],
  imports: [
    IonicPageModule.forChild(MypublicationPage),
  ],
})
export class MypublicationPageModule {}
