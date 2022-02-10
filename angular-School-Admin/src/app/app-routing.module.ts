import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponent } from './home/home.component';
import { OrgLoginComponent } from './org/org-login/org-login.component';
import { OrgRegisterComponent } from './org/org-register/org-register.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'organization/:orgName', component: AdminComponent},
  { path: 'org-register', component: OrgRegisterComponent },
  { path: 'org-login', component: OrgLoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
