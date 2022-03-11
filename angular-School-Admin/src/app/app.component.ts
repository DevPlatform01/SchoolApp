import { Component, OnInit } from '@angular/core';
import { OrgAuthService } from './auth/orgs/org-auth.service';

@Component(
{
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit
{
  constructor(private authService: OrgAuthService) {}

  ngOnInit(): void {
    this.authService.autoAuthUser();
  }
}
