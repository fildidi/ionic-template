import {Component} from '@angular/core';
import {AlertController, IonicPage, NavController, NavParams} from 'ionic-angular';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ICredentials} from "../../providers/auth-service/credentials.model";
import {AuthServiceService} from "../../providers/auth-service/auth-service";

/**
 * Generated class for the ForgotPasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-forgot-password',
    templateUrl: 'forgot-password.html',
})
export class ForgotPasswordPage {

    sLoading: boolean = false;

    userForgot: FormGroup;
    private email: AbstractControl;

    private errorMessage: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private formBuilder: FormBuilder,
                private authService: AuthServiceService,
                private alertCtrl: AlertController,) {

        this.userForgot = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
        });

        this.email = this.userForgot.controls['email'];
    }


    resetPassword(): void {
        if (this.userForgot.valid) {
            let registerInformation: ICredentials = {
                email: this.userForgot.controls.email.value,
            };
            this.authService.register(registerInformation).subscribe(() => {
                //redirect
                this.presentAlert();
            }, (error: any) => {
                this.errorMessage = error;
            })
        }
    }

    presentAlert() {
        let alert = this.alertCtrl.create({
            title: 'Email is sent!',
            subTitle: 'An email has been sent. This might take a while',
            buttons: ['Dismiss']
        });
        alert.present();
    }


}
