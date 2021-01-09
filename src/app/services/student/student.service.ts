import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {serviceUrl} from '../../utils/constants';
import {BehaviorSubject} from 'rxjs';
import Student from '../../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  selectedStudent = new BehaviorSubject<Student>(null);

  constructor(private http: HttpClient) {}

  onSelectStudent(student: Student): void {
    this.selectedStudent.next(student);
  }

  getStudents(): any {
    return this.http.get(`${serviceUrl}students`);
  }

  updateStudentById(id: number, payload: any): any {
    return this.http.put(`${serviceUrl}students/${id}`, payload);
  }
}
