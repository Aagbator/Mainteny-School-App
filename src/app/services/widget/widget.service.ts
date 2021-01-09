import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class WidgetService {
  isCourseWidgetOpen = new BehaviorSubject<boolean>(false);

  constructor() {}

  openCourseWidget(): void {
    this.isCourseWidgetOpen.next(true);
  }

  closeCourseWidget(): void {
    this.isCourseWidgetOpen.next(false);
  }
}
