import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FaceCapturePage } from '../face-capture/face-capture';
import {VoiceCapturePage} from '../voice-capture/voice-capture';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  customerId;
  isBtnEnabled=false;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  onCustomerIdChange(){
  console.log(this.customerId);
    if(this.customerId != null && this.customerId != undefined){
        if(this.customerId.length == 8){
          this.isBtnEnabled = true;
        }else{
        this.isBtnEnabled = false;
        }
    }
  }


  getCustomerDetails(){
  console.log("welcome customer");
//call face capture page
  this.navCtrl.push(FaceCapturePage,{customerId:this.customerId});
  }

}
