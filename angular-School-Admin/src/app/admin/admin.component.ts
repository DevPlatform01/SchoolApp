import { ThisReceiver } from "@angular/compiler";
import { Component, NgModule, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrgAuthService } from "../auth/orgs/org-auth.service";

@Component
(
    {
        //This tells Angular what to do with this class. 
        selector: 'app-admin', //Allows us to use the admin 
        templateUrl: './admin.component.html',
        styleUrls:['./admin.component.css']
    } 

)

export class AdminComponent implements OnInit{
    constructor(public authService: OrgAuthService, private router: Router) {}
    orgPath = '';
    ngOnInit(): void {
        this.orgPath = "/" + this.authService.getPath();
    }
}