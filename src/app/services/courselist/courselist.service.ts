import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourselistService {
  private courses: string[] = [];

  constructor() { }

  // TODO GET
  getCourse(): string[] {
    return this.courses;
  }

  // TODO ADD
  addCourse(course: string): void {
    this.courses.push(course);
  }
}
