import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from '@angular/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {AgmCoreModule} from '@agm/core';
import { ResaltarDirective } from './directive/resaltar.directive';
import { ContarClicksDirective } from './directive/contar-clicks.directive';
import {Routes, RouterModule} from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { LugaresComponent } from './lugares/lugares.component';
import { LugaresService } from './service/lugares.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import {AngularFireAuthModule } from 'angularfire2/auth';
import { ContactoComponent } from './contacto/contacto.component';
import { CrearComponent } from './crear/crear.component';
import { LinkifystrPipe } from './pipes/linkifystr.pipe';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { AutorizacionService } from './service/autprizacion.service';


// con esto routeamos los nombres de dominio
const appRoutes: Routes = [
  {path: '', component: LugaresComponent}, // para que sepa angular que hacer cuando no haya nombre de dominio
  {path: 'lugares', component: LugaresComponent}, // esta es una ruta
  {path: 'detalle/:id', component: DetalleComponent}, // agregamos la ruta para detalles
  {path: 'contacto', component: ContactoComponent},
  {path: 'crear/:id', component: CrearComponent},
  {path: 'login', component: LoginComponent},
  {path: 'registro', component: RegistroComponent}
];
export const firebaseConfig = {
    apiKey: 'AIzaSyDAMMsSJ_JHhdXnbxMRMQzDoI2Eh4FNhFU',
    authDomain: 'platzisquare-1531236961604.firebaseapp.com',
    databaseURL: 'https://platzisquare-1531236961604.firebaseio.com',
    storageBucket: 'platzisquare-1531236961604.appspot.com',
    messagingSenderId: '178261548730'
};
@NgModule({
  declarations: [
    AppComponent,
    ResaltarDirective,
    ContarClicksDirective,
    DetalleComponent, // agregamos el componente para detalles
    LugaresComponent, // el componente para lugares
    ContactoComponent,
    CrearComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],

  imports: [
    BrowserModule,
    FormsModule,
    AgmCoreModule.forRoot ({
      apiKey: 'AIzaSyAtEJq2ygNokhfA__i26ZrpymZpdNlcAfg'
    }),
    RouterModule.forRoot(appRoutes), // agregamos el import
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    HttpModule,
    BrowserAnimationsModule
  ],

  providers: [LugaresService, AutorizacionService], // importamos el servicio
  bootstrap: [AppComponent]
})
export class AppModule { }
