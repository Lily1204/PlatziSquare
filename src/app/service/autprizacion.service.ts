import { Injectable } from '@angular/core';
import { AngularFireAuth } from '../../../node_modules/angularfire2/auth';

@Injectable()
export class AutorizacionService {
    constructor (private angularFireAuth: AngularFireAuth) {
    //    this.isLogged();
    }
public login = (email, password) => {
    this.angularFireAuth.auth.signInWithEmailAndPassword (email, password)
    .then ((response) => {
        alert ('Usuario logeado con exito');
        console.log(response);
    })
    .catch((error) => {
        alert('un error a ocurrido');
        console.log(error);
    });
}
public registro = (email, password) => {
    this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password)
    .then ((response) => {
        alert ('Usuario Registrado con exito');
        console.log(response);
    })
    .catch((error) => {
        alert('un error a ocurrido');
        console.log(error);
    });
}
// para saber si el usuario esta logeado
/*
public isLogged() {
return this.angularFireAuth.authState;
}*/
}
