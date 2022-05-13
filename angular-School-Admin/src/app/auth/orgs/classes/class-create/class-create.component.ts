import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrgAuthService } from '../../org-auth.service';

@Component({
  selector: 'app-class-create',
  templateUrl: './class-create.component.html',
  styleUrls: ['./class-create.component.css']
})
export class ClassCreateComponent implements OnInit {
  form: FormGroup;

  constructor(public authService: OrgAuthService, private router: Router) { }

  ngOnInit(): void {
    // setting up required field validators with form controls
    this.form = new FormGroup({
      'title': new FormControl(null, {
        validators: [Validators.required]
      }),
      'description': new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  onCreate() {
    // if any of the fields are invalid, exit function
    if (this.form.invalid) {
      return;
    }

    // remove spaces from organization title with '-' for better routing
    

    // send object to the server using org-auth service
    this.authService.createOrgClass(
      this.form.value.title,
      this.form.value.description, 
    );

    // reset form
    this.form.reset();
    
    //navigate to organization login page
    this.router.navigate(["/organization/" + this.authService.getPath() + "/admin"]);
  }

}
