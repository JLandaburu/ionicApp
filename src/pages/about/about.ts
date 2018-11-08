import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  lista: Array<any> = [
    {
      titulo: "Twitter",
      color: "#AF3",
      icon: "twitter"
    },
    {
      titulo: "Facebook",
      color: "#E2A",
      icon: "facebook"
    }
  ];

  constructor(public navCtrl: NavController) {

  }

}
