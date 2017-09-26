import { Component } from '@angular/core';
import {App, NavController} from 'ionic-angular';
import {AuthServiceService} from "../../providers/auth-service/auth-service";
import {OnboardingPage} from "../onboarding/onboarding";
import {AuthGuard} from "../../providers/auth-gard/auth-gard";

@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage extends AuthGuard {

  private errorMessage: string;
  constructor(
      public navCtrl: NavController,
      public authSvc: AuthServiceService,
      public app: App
  ) {
    super(authSvc, navCtrl);

  }

  logOut() {
    this.authSvc.logOut().subscribe(() => {
      //redirect
      console.log('success logout');
      this.navCtrl.push(OnboardingPage);
    }, (error: any) => {
      this.errorMessage = error;
    })
  }

}
