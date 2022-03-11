import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrgAuthService } from '../org-auth.service';

@Component({
  selector: 'app-org-register',
  templateUrl: './org-register.component.html',
  styleUrls: ['./org-register.component.css']
})
export class OrgRegisterComponent implements OnInit {
  // initialize form group
  form: FormGroup;

  constructor(public authService: OrgAuthService, private router: Router) { }

  ngOnInit(): void {
    // setting up required field validators with form controls
    this.form = new FormGroup({
      'title': new FormControl(null, {
        validators: [Validators.required]
      }),
      'firstName': new FormControl(null, {
        validators: [Validators.required]
      }),
      'lastName': new FormControl(null, {
        validators: [Validators.required]
      }),
      'email': new FormControl(null, {
        validators: [Validators.required]
      }),
      'password': new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }
  onRegister() {
    // if any of the fields are invalid, exit function
    if (this.form.invalid) {
      return;
    }

    // remove spaces from organization title with '-' for better routing
    

    // send object to the server using org-auth service
    this.authService.createOrg(
      this.form.value.title,
      this.form.value.firstName, 
      this.form.value.lastName,
      this.form.value.email, 
      this.form.value.password);

    // reset form
    this.form.reset();
    
    //navigate to organization login page
    this.router.navigate(["/org-login"]);
  }

}
