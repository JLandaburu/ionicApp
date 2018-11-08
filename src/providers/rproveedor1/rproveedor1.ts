import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the Rproveedor1Provider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class Rproveedor1Provider {

  constructor(public http: HttpClient) {
    console.log('Hello Rproveedor1Provider Provider');
  }

  obtenerDatos(){
    return this.http.get('https://jsonplaceholder.typicode.com/users'); //para obtener los datos
  }
}
