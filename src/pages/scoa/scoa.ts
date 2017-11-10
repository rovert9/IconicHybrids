import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'


/**
 * Generated class for the ScoaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scoa',
  templateUrl: 'scoa.html',
})
export class ScoaPage {
  course = []
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course = navParams.get('text')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScoaPage');
  }
  backToHome(){
    this.navCtrl.pop();
  }

}
