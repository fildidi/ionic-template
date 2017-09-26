import {Component} from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams} from 'ionic-angular';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthServiceService} from "../../providers/auth-service/auth-service";
import {ICredentials} from "../../providers/auth-service/credentials.model";
import {TabsPage} from "../tabs/tabs";
import {OnboardingPage} from "../onboarding/onboarding";

/**
 * Generated class for the CreateAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
    selector: 'page-create-account',
    templateUrl: 'create-account.html',
})
export class CreateAccountPage {

    private registerForm: FormGroup;
    private errorMessage: string;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                private app: App,
                private formBuilder: FormBuilder,
                private authService: AuthServiceService,
                private alertCtrl: AlertController) {

        this.registerForm = this.formBuilder.group({
            name: ['', Validators.compose([Validators.required])],
            email: [null, Validators.compose([Validators.required, Validators.email])],
            password: [null, Validators.compose(
                [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(100),
                    Validators.pattern(/\d/)
                ])]
        });
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CreateAccountPage');
    }

    public register(): void {
        if (this.registerForm.valid) {
            let registerInformation: ICredentials = {
                name: this.registerForm.controls.name.value,
                email: this.registerForm.controls.email.value,
                password: this.registerForm.controls.password.value
            };
            this.authService.register(registerInformation).subscribe(() => {
                //redirect
                this.navCtrl.push(OnboardingPage);
            }, (error: any) => {
                this.errorMessage = error;
            })
        }
    }


}
