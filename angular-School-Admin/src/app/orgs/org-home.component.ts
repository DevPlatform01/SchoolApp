import { Component, OnInit } from "@angular/core";
import { OrgAuthService } from "../auth/orgs/org-auth.service";

@Component({
    templateUrl: './org-home.component.html'
})
export class OrgHomeComponent implements OnInit{
    orgPath = '';
    constructor(private authService: OrgAuthService) {}

    ngOnInit(): void {
        this.orgPath = "/" + this.authService.getPath();
    }
    
}