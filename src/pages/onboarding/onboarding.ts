import {Component} from '@angular/core';
import {App, IonicPage, NavController, NavParams, Platform} from 'ionic-angular';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TabsPage} from "../tabs/tabs";
import {AuthServiceService} from "../../providers/auth-service/auth-service";
import {ICredentials} from "../../providers/auth-service/credentials.model";
import {CreateAccountPage} from "../create-account/create-account";
import {ForgotPasswordPage} from "../forgot-password/forgot-password";

/**
 * Generated class for the OnboardingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-onboarding',
    templateUrl: 'onboarding.html',
})
export class OnboardingPage {

    isLoading: boolean = false;

    user: FormGroup;
    private email: AbstractControl;
    private password: AbstractControl;

    private showBuildInfo: boolean;
    private errorMessage: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private formBuilder: FormBuilder,
                private platform: Platform,
                private authService: AuthServiceService,
                private app: App) {

        this.user = this.formBuilder.group({
            email: ['', Validators.compose([Validators.required, Validators.email])],
            password: ['', Validators.required],
        });
    }


    public login(user) {
        if (user.valid) {
            let userInformation: ICredentials = {
                email: this.user.controls.email.value,
                password: this.user.controls.password.value
            };
            this.authService.login(userInformation).subscribe(() => {
                //redirect
                this.app.getRootNavs()[0].setRoot(TabsPage);
            }, (error: any) => {
                this.errorMessage = error;
            })
        }
    }

    public goToForgotPassword() {
        this.navCtrl.push(ForgotPasswordPage);
    }

    public goToCreateAccount() {
        this.navCtrl.push(CreateAccountPage);
    }
}
