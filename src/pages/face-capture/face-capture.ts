import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { WelcomePage } from '../welcome/welcome';

import {VoiceCapturePage} from '../voice-capture/voice-capture';
/**
 * Generated class for the FaceCapturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-face-capture',
  templateUrl: 'face-capture.html',
})
export class FaceCapturePage {
	myCustomerId;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FaceCapturePage');
    console.log(this.navParams.data.customerId);
    this.myCustomerId = this.navParams.data.customerId;

   //use native phone camera api to launch camera
  //then save the captured image,call processing api to edit image
  //then activate map api and capture location coordinates

  //then call voice capture page
  this.navCtrl.push(VoiceCapturePage);
  }

}
