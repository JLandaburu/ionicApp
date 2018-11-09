import { Component } from '@angular/core';
import { NavController, ActionSheetController, Platform, LoadingController } from 'ionic-angular';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { MasInfoPage } from '../mas-info/mas-info';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  myList = [];
  constructor(public navCtrl: NavController, public platform: Platform, public actionSheetCtrl: ActionSheetController, public loadingCtrl: LoadingController) {
    this.myList = [
      {
        'title': 'Facebook',
        'icon': 'facebook',
        'description': 'Social Network 1',
        'color': 'red'
      },
      {
        'title': 'Twitter',
        'icon': 'twitter',
        'description': 'Social Network 2',
        'color': 'blue'
      },
      {
        'title': 'Instagram',
        'icon': 'instagram',
        'description': 'Social Network 3',
        'color': 'pink'
      },
      {
        'title': 'Snapchat',
        'icon': 'snapchat',
        'description': 'Social Network 4',
        'color': 'yellow'
      }
    ]
  }

  openNavDetailsPage(item){
    this.navCtrl.push(MasInfoPage, {item: item});
  }

  openMenu(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: 'share-alt',
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: 'play',
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: 'close-circle',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  presentLoading() {
    this.loadingCtrl.create({
      content: '<p>Cargando...</p>',
      cssClass: 'cargando',
      duration: 3000,
      dismissOnPageChange: true
    }).present();
  }
}
