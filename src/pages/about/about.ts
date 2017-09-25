import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AuthGuard} from "../../providers/auth-gard/auth-gard";
import {AuthServiceService} from "../../providers/auth-service/auth-service";

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage extends AuthGuard  {

  constructor(public navCtrl: NavController, public authSvc: AuthServiceService) {

    super(authSvc, navCtrl);
  }

}
