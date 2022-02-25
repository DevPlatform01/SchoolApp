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

    constructor(private http: HttpClient, private router: Router) {}

    getToken() {
        return this.token;
    }

    getIsAuth() {
        return this.isAuthenticated;
    }

    // this function allows other places to listen to authentication status
    getAuthStatusListener() {
        return this.authStatusListener.asObservable();
    }

    createOrg(title: string, firstName: string, lastName: string, email: string, password: string) {
        const org = {
            title: title,
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
        this.http.post<{token: string, path: string}>('http://localhost:3000/api/organizations/login', {email: email, password: password})
            .subscribe((response) => {
                const token = response.token
                this.token = token;

                // if we get a valid token back (AKA successful login) we set our authentication status, and notify any listeners that the status has changed
                if (token) {
                    this.isAuthenticated = true;
                    this.authStatusListener.next(true);

                    // navigate to admin dashboard of organization
                    this.router.navigate(["/organization/" + response.path]);
                }
            });
    }

    logout() {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        this.router.navigate([""]);
    }
}