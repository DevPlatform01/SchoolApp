import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrgAuthService } from '../auth/orgs/org-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userIsAuthenticated = false;
  // set up a subscription to listen to authentication status
  private authListenerSub: Subscription;
  orgPath = '';

  constructor(private authService: OrgAuthService) { }

  ngOnInit(): void {
    // listen for authentication changes. either true or false
    this.userIsAuthenticated = this.authService.getIsAuth();
    this.authListenerSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
      
    });
    this.orgPath = "/" + this.authService.getPath();
  }

  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy(): void {
      // destroy subscription when leaving page, to prevent memory leaks
      // only have to do this on non-angular subscriptions we set up
      this.authListenerSub.unsubscribe();

    
  }

}
