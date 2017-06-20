import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompleteProfilePage } from './complete-profile';

@NgModule({
  declarations: [
    CompleteProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(CompleteProfilePage),
  ],
  exports: [
    CompleteProfilePage
  ]
})
export class CompleteProfilePageModule {}
