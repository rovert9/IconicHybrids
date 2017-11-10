import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'
/**
 * Generated class for the ScobPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scob',
  templateUrl: 'scob.html',
})
export class ScobPage {
  course = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course = navParams.get('text')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScobPage');
  }

  backToHome(){
    this.navCtrl.pop();
  }
}
