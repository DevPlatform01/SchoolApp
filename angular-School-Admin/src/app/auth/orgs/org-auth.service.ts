import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class OrgAuthService {
    // is the user logged in
    private isAuthenticated = false;
    // token to authenticate logged in status
    private token: string;
    // setting up a listener to listen for any authentication changes such as logout/login
    // will return true or false
    private authStatusListener = new Subject<boolean>();
    private tokenTimer: any;

    constructor(private http: HttpClient, private router: Router) {}

    getToken() {
        return this.token;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    getPath() {
        const path = localStorage.getItem('path');

        if (!path) {
            return;
        } else {
            return path;
        }
    }

    // this function allows other places to listen to authentication status
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createOrg(title: string, firstName: string, lastName: string, email: string, password: string) {
        const org = {
            title: title,
            path: title.replace(/\s/g , "-").toLowerCase(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
          }
        this.http.post('http://localhost:3000/api/organizations/register', org)
            .subscribe((responseData) => {
                console.log(responseData);
            });
    }

    login (email: string, password: string) {
        this.http.post<{token: string, expiresIn: number, path: string}>('http://localhost:3000/api/organizations/login', {email: email, password: password})
            .subscribe((response) => {
                const token = response.token
                this.token = token;

                // if we get a valid token back (AKA successful login) we set our authentication status, and notify any listeners that the status has changed
                if (token) {
                    const expiresInDuration = response.expiresIn;
                    this.setAuthTimer(expiresInDuration);
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);
                    const now = new Date();
                    const expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                    this.saveAuthData(token, expirationDate, response.path);
                    console.log(expirationDate);

                    // navigate to admin dashboard of organization
                    this.router.navigate(["/organization/" + response.path]);
                }
            });
    }

    autoAuthUser() {
        const authInfo = this.getAuthData();
        if (!authInfo) {
            return;
        }
        const now = new Date();
        const expiresIn = authInfo.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInfo.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.router.navigate([""]);
        localStorage.removeItem('token');
        localStorage.removeItem('expiration');
        localStorage.removeItem('path');
    }

    private setAuthTimer(duration: number) {
        console.log('setting timer: ' + duration);
        this.tokenTimer = setTimeout(() => {
            this.logout();
        }, duration * 1000);
    }

    private saveAuthData(token: string, expirationDate: Date, path: string) {
        localStorage.setItem('token', token);
        localStorage.setItem('expiration', expirationDate.toISOString());
        localStorage.setItem('path', path);
    }

    private getAuthData() {
        const token = localStorage.getItem('token');
        const expirationDate = localStorage.getItem('expiration');
        const path = localStorage.getItem('path');

        if (!token || !expirationDate || !path) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate),
            path: path
        }
    }
}