import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FaceCapturePage } from './face-capture';

@NgModule({
  declarations: [
    FaceCapturePage,
  ],
  imports: [
    IonicPageModule.forChild(FaceCapturePage),
  ],
})
export class FaceCapturePageModule {}
