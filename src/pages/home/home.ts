import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthServiceService} from "../../providers/auth-service/auth-service";
import {AuthGuard} from "../../providers/auth-gard/auth-gard";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage extends AuthGuard {

    constructor(public navCtrl: NavController, public authSvc: AuthServiceService) {

        super(authSvc, navCtrl);
    }

}
