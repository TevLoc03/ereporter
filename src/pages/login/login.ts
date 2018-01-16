import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { MyhomePage } from '../myhome/myhome';
import { PublishPage } from '../publish/publish';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {  
  nav: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  forgotPwd() {
    console.log('ionViewDidLoad LoginPage');
  }

  myhome(){
    this.navCtrl.setRoot(MyhomePage);
  }

  presentPrompt() {
    let alert = this.alertCtrl.create({
      title: 'Entrer votre Email',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email'
        }
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Envoyer',
        }
      ]
    });
    alert.present();
  }
}
