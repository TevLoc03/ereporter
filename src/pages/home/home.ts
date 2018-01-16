import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { InscriptionPage } from '../inscription/inscription';
import { MyhomePage } from '../myhome/myhome';
import { PublishPage } from '../publish/publish';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  connexion(){
    this.navCtrl.push(LoginPage);
  }


  inscription(){
    this.navCtrl.push(InscriptionPage);
  }
}
