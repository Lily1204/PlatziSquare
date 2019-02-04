import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
// para que otros modulos sean inyectados en este servicio
@Injectable()
export class LugaresService {
API_ENDPOINT =  'https://platzisquare-1531236961604.firebaseio.com';
    lugares: any = [
        {id: 1, plan: 'pagado', cercania: 1, distancio: 1, active: true, nombre: 'Floreria las Rosas'},
        {id: 2, plan: 'gratuito', cercania: 1, distancio: 1.8, active: true, nombre: 'Donas la pesadita'},
        {id: 3, plan: 'gratuito', cercania: 2, distancio: 5, active: true, nombre: 'Veterianaria las Huellitas Felices'},
        {id: 4, plan: 'gratuito', cercania: 3, distancio: 10, active: false, nombre: 'Sushi Suhiroll'},
        {id: 5, plan: 'pagado', cercania: 3, distancio: 35, active: true, nombre: 'Hotel la gracia'},
        {id: 6, plan: 'gratuito', cercania: 3, distancio: 120, active: false, nombre: 'Zapateria el clavo'},
    ];
     constructor(private afDB: AngularFireDatabase, private http: Http) {}

    public getLugares() {
   // return this.afDB.list('lugares/');
   // regresar el lugar con http
   return this.http.get( this.API_ENDPOINT + '/.json')
   .map((resultado) => {
     const data = resultado.json().lugares;
     return data;
   });
    }
   public buscarLugar(id) {
        return this.lugares.find((lugar) => lugar.id == id) || null;
      }
      public guardarLugar(lugar) {
      //  this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
    // GUARDAR CON HTTP
        const headers = new Headers({ 'Content-Type' : 'application/json' });
        return this.http.post(
          this.API_ENDPOINT + '/lugares.json',
          lugar,
          {headers: headers}
         ).subscribe();
    }
      public obtenerGeoData(direccion) {
        return this.http.get('http://maps.google.com/maps/api/geocode/json?address=' + direccion);
      }
      public  getLugar(id) {
      return  this.afDB.object('lugares/' + id);
      }

      public editarLugar(lugar) {
        this.afDB.database.ref('lugares/' + lugar.id).set(lugar);
      }
}
