import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { OrgLoginComponent } from './auth/orgs/org-login/org-login.component';
import { OrgRegisterComponent } from './auth/orgs/org-register/org-register.component';
import { OrgHomeComponent } from './orgs/org-home.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'organization/:orgName', component: OrgHomeComponent, canActivate: [AuthGuard]},
  { path: 'organization/:orgName/admin', component: AdminComponent, canActivate: [AuthGuard]},
  { path: 'org-register', component: OrgRegisterComponent },
  { path: 'org-login', component: OrgLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
