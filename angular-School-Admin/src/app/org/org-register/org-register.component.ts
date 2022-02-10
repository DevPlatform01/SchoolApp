import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-org-register',
  templateUrl: './org-register.component.html',
  styleUrls: ['./org-register.component.css']
})
export class OrgRegisterComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  onRegister(form: NgForm) {
    const org = {orgName: form.value.orgName, email: form.value.email}
    this.http.post('http://localhost:3000/register', org)
      .subscribe((responseData) => {
        console.log(responseData);
      });
    console.log('registered');
  }

}
