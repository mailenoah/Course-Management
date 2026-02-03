import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from '../shared/course';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.component.html',
  styleUrl: './edit-course.component.scss'
})

export class EditCourseComponent {
  courseId!: number; // Using the non-null assertion operator
  course!: Course; // Using the non-null assertion operator

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    // Checking if 'id' is null before assigning it
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.courseId = +id;
      this.getCourseDetails();
    } else {
      window.alert("Internal Server Error. Please Contact Support.")
    }
  }

  getCourseDetails() {
    this.dataService.getCourseById(this.courseId).subscribe(
      (course: Course) => {
        this.course = course;
      },
    );
  }

  saveCourseChanges() {
    this.dataService.editCourse(this.courseId, this.course).subscribe(
      () => {
        this.router.navigate(['/courses']); // Redirect back to courses list
      },
    );
  }
  
  // Method to handle cancellation
  cancel() {
    // Navigate back to the home page
    this.router.navigate(['/courses']);
  }
}