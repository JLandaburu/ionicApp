import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MasInfoPage } from '../mas-info/mas-info';
import { Rproveedor1Provider } from '../../providers/rproveedor1/rproveedor1';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuarios;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public prov: Rproveedor1Provider) {

  }
  
  nuevaPagina(){
    this.navCtrl.push(MasInfoPage); //para llevar a una nueva pagina se usa el push dentro del NavController
  }

  alert(){
    let myAlert = this.alertCtrl.create({
      title: 'ALERTA',
      message: '¿Cómo estas?',
      buttons: ['Bien','Mal']
    });
    myAlert.present(); //se ejecuta efectivamente
  }

  newAlert(){
    let myAlert = this.alertCtrl.create({
      title: 'Ingrese nombre',
      inputs: [
        {
          name: 'Nombre',
          placeholder: 'Nombre'
        }
      ],
      buttons: [
        {
          text: 'Cancelar', //lo que dice el boton
          handler: data => { //funcion que se ejecuta cuando apretamos este boton
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Guardar',
          handler: data => {
            console.log('Saved clicked');
          }
        }
      ]
    });
    myAlert.present(); //se ejecuta efectivamente
  }

  ionViewDidLoad(){
    this.prov.obtenerDatos().subscribe(
      (data)=>{this.usuarios = data;}, //todos los datos se van a la variable usuarios
      (error)=>{console.log(error);} //por si ocurre error
    )
  }
}
