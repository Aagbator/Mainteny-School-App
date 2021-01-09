import { Injectable } from '@angular/core';
import { serviceUrl } from '../../utils/constants';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http: HttpClient) {}

  getCourses(): any {
    return this.http.get(`${serviceUrl}courses`);
  }
}
