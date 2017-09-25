import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Subject} from "rxjs/Subject";
import {Platform} from "ionic-angular";
import {Network} from '@ionic-native/network';

/*
  Generated class for the NetworkProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkService {

  public isNetworkAccessAvailable: Subject<boolean> = new Subject<boolean>();

  constructor(private network: Network,
              private platform: Platform) {

    console.log('Hello NetworkProvider Provider');
    this.setListeners();
  }

  private setListeners(): void {
    this.platform.ready().then(() => {
      if (this.network.type === 'none') {
        this.isNetworkAccessAvailable.next(false);
      } else {
        this.isNetworkAccessAvailable.next(true);
      }
      this.network.onDisconnect().subscribe(() => {
        this.isNetworkAccessAvailable.next(false);
      });
      this.network.onConnect().subscribe(() => {
        this.isNetworkAccessAvailable.next(true);
      });
    });
  }
}
