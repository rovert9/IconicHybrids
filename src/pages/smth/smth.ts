import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home'

/**
 * Generated class for the SmthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-smth',
  templateUrl: 'smth.html',
})
export class SmthPage {

  course=[]
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.course = navParams.get('text')
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SmthPage');
  }

  backToHome(){
    this.navCtrl.pop();
  }

}
