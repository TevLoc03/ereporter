import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';
import { Http } from '@angular/http';
import { MypublicationPage } from '../mypublication/mypublication';

/**
 * Generated class for the MyhomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myhome',
  templateUrl: 'myhome.html',
  providers: [ApiServiceProvider]
})
export class MyhomePage {

  public articles: any[];

  constructor(public apiService: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter(){
  let seq = this.apiService.get('news/read.php', null, null).share();
    
    seq
      .map(res => res.json())
      .subscribe(res => {
          // Retour JSON/XML de l'API
          this.articles = res.articles;
          console.log(res);
        }, err => {
          console.error('ERROR', err);
        });
    return seq;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyhomePage');
  }


  printArticle(){
    this.navCtrl.push(MypublicationPage);
  }

}
