import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {OnboardingPage} from "../pages/onboarding/onboarding";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    // rootPage: any = OnboardingPage;

    @ViewChild(Nav) nav: Nav;

    constructor(private platform: Platform,
                private statusBar: StatusBar,
                private splashscreen: SplashScreen,
    ) {
        this.setupApp();
    }


    private setupApp(): void {
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                this.statusBar.styleDefault();
                this.splashscreen.hide();
            }
        });
    }

    ngOnInit(): void {
        console.log("TEST")
        this.nav.setRoot(OnboardingPage);
    }

}
