import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VoiceCapturePage } from './voice-capture';

@NgModule({
  declarations: [
    VoiceCapturePage,
  ],
  imports: [
    IonicPageModule.forChild(VoiceCapturePage),
  ],
})
export class VoiceCapturePageModule {}
