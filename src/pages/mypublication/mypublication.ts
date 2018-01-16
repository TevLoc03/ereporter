import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';
import { Http } from '@angular/http';

/**
 * Generated class for the MypublicationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mypublication',
  templateUrl: 'mypublication.html',
  providers: [ApiServiceProvider]
})
export class MypublicationPage {

  public articles: any[];

  constructor(public apiService: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  printArticle(){

    let seq = this.apiService.get('news/read_once.php?idArticle=1', null, null).share();
      
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
    //this.printArticle(1);
  }

}
