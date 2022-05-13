import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrgAuthService } from 'src/app/auth/orgs/org-auth.service';
import { Course } from '../course.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassListComponent implements OnInit {

  courses: Course[] = [];
  private coursesSub: Subscription;

  constructor(public authService: OrgAuthService) { }

  ngOnInit(): void {
    this.authService.getCourses();
    this.coursesSub = this.authService.getCourseUpdateListener()
      .subscribe((courses: Course[]) => {
        this.courses = courses;
      });
  }

}
