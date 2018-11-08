import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { removeDebugNodeFromIndex } from '@angular/core/src/debug/debug_node';
import { MasInfoPage } from '../mas-info/mas-info';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  myList = [];
  constructor(public navCtrl: NavController) {
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
}
