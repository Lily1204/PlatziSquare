import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../service/lugares.service';
import { LugaresComponent } from '../lugares/lugares.component';
// un componente en angular
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})

export class DetalleComponent {
  /* quitar la lista pasra ser llamada por un servicio
  lugares: any = [

    {id: 1, plan: 'pagado', cercania: 1, distancia: 1, active: true, nombre: 'Floreria las Rosas', description: 'la mejor floreria'},
    {id: 2, plan: 'gratuito', cercania: 1, distancia: 1.8, active: true, nombre: 'Donas la pesadita', description: 'la mejor floreria'},
    // tslint:disable-next-line:max-line-length
    {id: 3, plan: 'gratuito', cercania: 2, distancia: 5, active: true, nombre: 'Veterianaria las Huellitas Felices', description: 'la '},
    {id: 4, plan: 'gratuito', cercania: 3, distancia: 10, active: false, nombre: 'Sushi Suhiroll', description: 'el mejor Suchi'},
    {id: 5, plan: 'pagado', cercania: 3, distancia: 35, active: true, nombre: 'Hotel la gracia', description: 'el mejor hotel'},
    // tslint:disable-next-line:max-line-length
    {id: 6, plan: 'gratuito', cercania: 3, distancia: 120, active: false, nombre: 'Zapateria el clavo', description: 'lo '}
  ];*/
  id = null;
  contenedor: any = {};
constructor (private route: ActivatedRoute, private lugaresService: LugaresService) {
  console.log (this.route.snapshot.params ['id']);
  console.log (this.route.snapshot.queryParams['action2']);
  console.log (this.route.snapshot.queryParams['referer']);
  this.id = this.route.snapshot.params ['id']; // pasamos el id que resivimos como parametro
 this.contenedor = this.lugaresService.buscarLugar(this.id);

}
/* se quita por que ahora sella llamada desde servicio
buscarLugar() {
  return this.lugares.find((lugar) => lugar.id == this.id) || null;
}*/
}
