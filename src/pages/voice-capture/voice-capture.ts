import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestServiceProvider } from '../../providers/rest-service/rest-service';
/**
 * Generated class for the VoiceCapturePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-voice-capture',
  templateUrl: 'voice-capture.html',
  providers:[RestServiceProvider]
})
export class VoiceCapturePage {
	restData;
  constructor(public navCtrl: NavController, public navParams: NavParams,public restSvc:RestServiceProvider) {
  restSvc.load().then(data => {
  	console.log(data);
  	this.restData = data;
  	} 
  	)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad VoiceCapturePage');
  }

}
