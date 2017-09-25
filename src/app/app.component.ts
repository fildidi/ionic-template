import {Component, ViewChild} from '@angular/core';
import {Keyboard, Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';

import {TabsPage} from '../pages/tabs/tabs';
import {OnboardingPage} from "../pages/onboarding/onboarding";
import {AboutPage} from "../pages/about/about";

@Component({
    templateUrl: 'app.html'
})
export class MyApp {
    // rootPage: any = TabsPage;

    @ViewChild(Nav) nav: Nav;

    constructor(private platform: Platform,
                private statusBar: StatusBar,
                private splashscreen: SplashScreen,
                private keyboard: Keyboard
    ) {
        this.setupApp();
    }


    private setupStatusBar(): void {
        this.statusBar.overlaysWebView(false);
        this.statusBar.styleLightContent();
    }



    private setupApp(): void {
        this.platform.ready().then(() => {
            if (this.platform.is('cordova')) {
                this.statusBar.styleDefault();
                // this.keyboard.hideKeyboardAccessoryBar(false);
                this.splashscreen.hide();
            }
        });
    }

    ngOnInit(): void {
        console.log("TEST")
        this.nav.setRoot(OnboardingPage);
    }

}
