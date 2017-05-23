import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SessionFilterPage } from './session-filter';

@NgModule({
  declarations: [
    SessionFilterPage,
  ],
  imports: [
    IonicPageModule.forChild(SessionFilterPage),
  ],
  exports: [
    SessionFilterPage
  ]
})
export class SessionFilterPageModule {}
