import {NavController} from 'ionic-angular';

import {OnboardingPage} from "../../pages/onboarding/onboarding";
import {AuthServiceService} from "../auth-service/auth-service";


export class AuthGuard {
    constructor(protected authSvc: AuthServiceService,
                protected navController: NavController) {
    }

    ionViewCanEnter(): Promise<void> {
        return new Promise<void>((resolve) => {
            if (this.authSvc.currentUser) {
                resolve();
            } else {
                this.navController.setRoot(OnboardingPage);
                resolve();
            }
        });
    }
}