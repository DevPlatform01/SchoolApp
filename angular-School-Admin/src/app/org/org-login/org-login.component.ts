import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-org-login',
  templateUrl: './org-login.component.html',
  styleUrls: ['./org-login.component.css']
})
export class OrgLoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(form: NgForm) {
    const user = {
      username: form.value.username,
      pwd: form.value.pwd
    }
    this.http.post('http://localhost:3000/org-login', user, {observe: 'response'})
      .subscribe((responseData) => {
        if (responseData.status === 404) {
          console.log('invalid username/password');
        } else {
          
          this.router.navigate(["/organization/" + responseData.body]);
        }
      });
  }

}
