import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { OrgAuthService } from "../auth/orgs/org-auth.service";

@Component({
    templateUrl: './org-home.component.html'
})
export class OrgHomeComponent implements OnInit{
    orgPath = '';
    constructor(private authService: OrgAuthService, private router: Router) {}

    ngOnInit(): void {
        this.orgPath = "/" + this.authService.getPath();
    }
    
    onRegister() {
        this.router.navigate(["/org-login"]);
    }
}