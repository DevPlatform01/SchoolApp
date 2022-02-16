import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-register',
  templateUrl: './org-register.component.html',
  styleUrls: ['./org-register.component.css']
})
export class OrgRegisterComponent implements OnInit {
  // initialize form group
  form: FormGroup;

  constructor(private http: HttpClient, private router: Router) { }

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
      'username': new FormControl(null, {
        validators: [Validators.required]
      }),
      'pwd': new FormControl(null, {
        validators: [Validators.required]
      })
    })
  }
  onRegister() {
    // if any of the fields are invalid, exit function
    if (this.form.invalid) {
      return;
    }

    // grab values from form and input into an object
    const org = {
      title: this.form.value.title,
      firstName: this.form.value.firstName,
      lastName: this.form.value.lastName,
      email: this.form.value.email,
      username: this.form.value.username,
      pwd: this.form.value.pwd
    }

    // send object to the server
    this.http.post('http://localhost:3000/register', org)
      .subscribe((responseData) => {
        console.log(responseData);
      });

    // reset form
    this.form.reset();
    
    //navigate to organization login page
    this.router.navigate(["/org-login"]);
  }

}
