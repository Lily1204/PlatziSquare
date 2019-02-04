import { Component } from '@angular/core';
import { LugaresService } from '../service/lugares.service';
import {trigger, state, style, animate, transition} from '@angular/animations';

// import { transition } from '@angular/core/src/animation/dsl';
// un componente en angular
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html',
  animations: [
    trigger('contenerdorAnimable', [
      state('inicial', style({
        opacity: 0
      })),
      state('final', style({
       opacity: 1
      })),
      transition('inicial => final', animate (5000)),
      transition('final => inicial', animate (3000)),
    ])
  ]
})

export class LugaresComponent {
  title = 'PlatziSquare';
  // variable de estado
  state = 'inicial';

  /* quitamos la lista y pedimos solo el servicio
  lugares: any = [
    {id: 1, plan: 'pagado', cercania: 1, distancio: 1, active: true, nombre: 'Floreria las Rosas'},
    {id: 2, plan: 'gratuito', cercania: 1, distancio: 1.8, active: true, nombre: 'Donas la pesadita'},
    {id: 3, plan: 'gratuito', cercania: 2, distancio: 5, active: true, nombre: 'Veterianaria las Huellitas Felices'},
    {id: 4, plan: 'gratuito', cercania: 3, distancio: 10, active: false, nombre: 'Sushi Suhiroll'},
    {id: 5, plan: 'pagado', cercania: 3, distancio: 35, active: true, nombre: 'Hotel la gracia'},
    {id: 6, plan: 'gratuito', cercania: 3, distancio: 120, active: false, nombre: 'Zapateria el clavo'}
  ];*/
  lat = 18.8547308;
  lng  = -97.1004983;
  lugares = null; // creamos una variable

  animar() {
this.state = (this.state === 'final') ? 'inicial' : 'final';

  }
animacionInicia(e) {
  console.log('iniciado');
  console.log(e);
}

animacionTermina(e) {
  console.log('terminado');
  console.log(e);
}
  constructor ( private lugaresService: LugaresService) { // para saver de donde viene el servicio creamos una variable privada
 // this.lugares = lugaresService.getLugares();
    lugaresService.getLugares()
    .subscribe((lugares) => {
      this.lugares = lugares;
      var me = this;
      me.lugares = Object.keys(me.lugares).map((key) =>
      me.lugares[key]);
      this.state = 'final';
    });
  }
}
