import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrgAuthService } from '../../orgs/org-auth.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  form: FormGroup;

  constructor(public authService: OrgAuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, {
        validators: [Validators.required]
      }),
      'password': new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  onRegister() {
    
  }
}

