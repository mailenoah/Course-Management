import { Component, OnInit } from '@angular/core';
import { Course } from '../../shared/course';
import { DataService } from '../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {
  courses: Course[] = [];
  courseId!: number; // Using the non-null assertion operator
  course!: Course; // Using the non-null assertion operator

  constructor(public dataService: DataService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.getCourses();
  }

  getCourses() {
    this.dataService.getAllCourses().subscribe(
      (courses: Course[]) => {
        this.courses = courses;
      },
    );
  }

  deleteCourse(courseId: Number) {
    if (confirm('Are you sure you want to delete this course?')) {
      this.dataService.deleteCourse(courseId).subscribe(
        () => {
          // Filter out the deleted course from the courses array
          this.courses = this.courses.filter(course => course.courseId !== courseId);
        },
      );
    }
  }

}
