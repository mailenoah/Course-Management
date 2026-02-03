import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { Course } from '../shared/course';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrl: './add-course.component.scss'
})
export class AddCourseComponent {
  course: Course = {
    courseId: 0,
    name: '',
    duration: '',
    description: ''
  };

  constructor(private router: Router, private dataService: DataService) {}

  saveCourse() {
    this.dataService.addCourse(this.course).subscribe(
      () => {
        // Redirect back to courses list after adding the course
        this.router.navigate(['/courses']);
      },
    );
  }
  // Method to handle cancellation
  cancel() {
    // Navigate back to the home page
    this.router.navigate(['/courses']);
  }
  }
  
