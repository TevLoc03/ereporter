import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewarticlePage } from './newarticle';

@NgModule({
  declarations: [
    NewarticlePage,
  ],
  imports: [
    IonicPageModule.forChild(NewarticlePage),
  ],
})
export class NewarticlePageModule {}
