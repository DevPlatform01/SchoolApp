//Modules bundles features into packages. 
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule } from '@angular/material/expansion';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { OrgRegisterComponent } from './auth/orgs/org-register/org-register.component';
import { OrgLoginComponent } from './auth/orgs/org-login/org-login.component';
import { OrgHomeComponent } from './orgs/org-home.component';
import { UserRegisterComponent } from './auth/users/user-register/user-register.component';
import { ClassCreateComponent } from './auth/orgs/classes/class-create/class-create.component';
import { ClassListComponent } from './orgs/classes/class-list/class-list.component';


@NgModule({
  declarations: [
    AppComponent, 
    AdminComponent,
    HeaderComponent, 
    HomeComponent, 
    OrgRegisterComponent, 
    OrgLoginComponent,
    OrgHomeComponent,
    UserRegisterComponent,
    ClassCreateComponent,
    ClassListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatIconModule, 
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    HttpClientModule,
    MatExpansionModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
