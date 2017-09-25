import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {ICredentials} from "./credentials.model";
import {Observable} from "rxjs/Observable";
import {Subscriber} from "rxjs/Subscriber";

/*
 Generated class for the AuthServiceProvider provider.

 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
 */
@Injectable()
export class AuthServiceService {

    public users: Array<ICredentials> = [];
    public currentUser: ICredentials = null;

    constructor() {
    }

    public register(credentials: ICredentials): Observable<void> {
        return new Observable<void>((subscriber: Subscriber<void>) => {
            this.users.push(credentials);
            console.log('users', this.users);
            subscriber.next();
            subscriber.complete();
        });
    }

    public login(credentials: ICredentials): Observable<ICredentials> {
        return new Observable<ICredentials>((subscriber: Subscriber<ICredentials>) => {
            let userToReturn = this.users.find(user => user.email === credentials.email && user.password === user.password);
            console.log('userToReturn', userToReturn);
            console.log('users', this.users);
            if (userToReturn) {
                this.currentUser = userToReturn;
                subscriber.next(userToReturn);
                subscriber.complete();
            } else {
                subscriber.error('Username or password are wrong! Please try again with correct credentials')
            }
        });
    }

    public resetPassword(credentials: ICredentials): Observable<void> {
        return new Observable<void>((subscriber: Subscriber<void>) => {
            let userToChange = this.users.find(user => user.email === credentials.email);
            userToChange.password = credentials.password;
            subscriber.next();
            subscriber.complete();
        });
    }

    public logOut(): Observable<void> {
        return new Observable<void>((subscriber: Subscriber<void>) => {
            this.currentUser = null;
            subscriber.next();
            subscriber.complete();
        });
    }

}
