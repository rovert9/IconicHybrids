import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SmthPage} from '../smth/smth';
import {ScobPage} from '../scob/scob';
import {ScoaPage} from '../scoa/scoa';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  text: string = ''  

  constructor(public navCtrl: NavController) {

  }

  search(){
    if(this.text == 'SAPA032' || this.text == 'sapa032')
    {
      this.navCtrl.push(SmthPage)   
      this.text = '' 
    }
    else
    if(this.text == 'SCOA032' || this.text == 'scoa032')
    {
      this.navCtrl.push(ScoaPage)
      this.text = ''
    }
    else
    if(this.text == 'SCOB032' || this.text == 'scob032')
    {
      this.navCtrl.push(ScobPage)
      this.text = ''
    }
    this.text = ''
  }

}
