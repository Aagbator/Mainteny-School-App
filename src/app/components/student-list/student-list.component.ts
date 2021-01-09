import { Component, OnInit } from '@angular/core';
import {WidgetService} from '../../services/widget/widget.service';
import {StudentService} from '../../services/student/student.service';
import Student from '../../models/student.model';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  isCourseListOpen: boolean;
  students = [];

  constructor(private widgetService: WidgetService, private studentService: StudentService) {
    this.widgetService.isCourseWidgetOpen.subscribe(val => {
      this.isCourseListOpen = val;
    });
  }

  ngOnInit(): void {
    this.studentService.getStudents().subscribe((res: Student[]) => {
      this.students = res.map(student => new Student(student));
    });
  }

}
