import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController  } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
import {ApiServiceProvider} from '../../providers/api-service/api-service';
import 'rxjs/add/operator/share';
import { Http } from '@angular/http';
import { MyhomePage } from '../myhome/myhome';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
/**
 * Generated class for the NewarticlePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newarticle',
  templateUrl: 'newarticle.html',
  providers: [ApiServiceProvider]
})
export class NewarticlePage {
  public photos : any;
  public base64Image : any;
  constructor(private transfer: FileTransfer, private file: File, public apiService: ApiServiceProvider, public navCtrl: NavController, public navParams: NavParams, private camera : Camera, private alertCtrl : AlertController, private toastCtrl: ToastController) {
  }

  const fileTransfer: FileTransferObject = this.transfer.create();

  fileTransfer.upload(..).then(..).catch(..);

  upload() {
  let options: FileUploadOptions = {
     fileKey: 'file',
     fileName: 'name.jpg',
     headers: {}
  }

  fileTransfer.upload('<file path>', '<api endpoint>', options)
   .then((data) => {
     // success
   }, (err) => {
     // error
   })

  ngOnInit() {
    this.photos = [];
  }

  deletePhoto(index){
    this.photos.splice(index, 1);
 }

 accessGallery(){
  this.camera.getPicture({
    sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
    destinationType: this.camera.DestinationType.DATA_URL
   }).then((imageData) => {
     this.base64Image = 'data:image/jpeg;base64,'+imageData;
    }, (err) => {
     console.log(err);
   });
 }

  takePhoto(){
    const options : CameraOptions = {
      quality: 50, // picture quality
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }
    this.camera.getPicture(options) .then((imageData) => {
        this.base64Image = "data:image/jpeg;base64," + imageData;
        this.photos.push(this.base64Image);
        this.photos.reverse();
      }, (err) => {
        console.log(err);
      });
  }

  publi = {};

  envoie() {

    let data = this.publi;

    console.log('preview', data);

    this.apiService.get('news/create.php', data)
    .subscribe(data => {
        console.log('ok', data);

        this.navCtrl.push(MyhomePage);
        let alert = this.alertCtrl.create({
          title: 'Publication envoyée!',
          buttons: ['OK']
        });
        alert.present();

    }, error => {
      console.error('err', error);

      let alert = this.alertCtrl.create({
        title: 'Erreur',
        buttons: ['OK']
      });

      alert.present();
    });

    }
  /*envoie(){
    let toast = this.toastCtrl.create({
      message: 'Publication envoyée!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }*/
}
