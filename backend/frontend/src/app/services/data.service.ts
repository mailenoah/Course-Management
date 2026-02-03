import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../shared/course';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public apiUrl = 'https://localhost:7049'; // My API URL

  constructor(private http: HttpClient) { }

  getAllCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(`${this.apiUrl}/api/Course/GetAllCourses`);
  }

  getCourseById(courseId: number): Observable<Course> {
    return this.http.get<Course>(`${this.apiUrl}/api/Course/GetCourse/${courseId}`);
  }
  
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.apiUrl}/api/Course/AddCourse`, course);
  }

  editCourse(courseId: Number, course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.apiUrl}/api/Course/EditCourse/${courseId}`, course);
  }

  deleteCourse(courseId: Number): Observable<Course> {
    return this.http.delete<Course>(`${this.apiUrl}/api/Course/DeleteCourse/${courseId}`);
  }
}