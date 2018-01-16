import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController  } from 'ionic-angular';
import {Camera, CameraOptions} from '@ionic-native/camera';
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
})
export class NewarticlePage {
  public photos : any;
  public base64Image : any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private camera : Camera, private alertCtrl : AlertController, private toastCtrl: ToastController) {
  }

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

  envoie(){
    let toast = this.toastCtrl.create({
      message: 'Publication envoyée!',
      duration: 3000,
      position: 'bottom'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }
}
