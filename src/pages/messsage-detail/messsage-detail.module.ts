import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MesssageDetailPage } from './messsage-detail';

@NgModule({
  declarations: [
    MesssageDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(MesssageDetailPage),
  ],
  exports: [
    MesssageDetailPage
  ]
})
export class MesssageDetailPageModule {}
