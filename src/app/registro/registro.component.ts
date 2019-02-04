import { Component } from '@angular/core';
import { AutorizacionService } from '../service/autprizacion.service';

@Component({
    selector: 'app-registro',
    templateUrl: './registro.component.html'
})
export class RegistroComponent {
    registro: any = {};
    constructor(private autorizacionService: AutorizacionService) {
         }
         registrar() {
            this.autorizacionService.registro(this.registro.email, this.registro.password);
         }
}
