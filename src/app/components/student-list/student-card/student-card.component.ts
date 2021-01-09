import {Component, Input, OnInit} from '@angular/core';
import {WidgetService} from '../../../services/widget/widget.service';
import Student from '../../../models/student.model';
import {StudentService} from '../../../services/student/student.service';

@Component({
  selector: 'app-student-card',
  templateUrl: './student-card.component.html',
  styleUrls: ['./student-card.component.scss']
})
export class StudentCardComponent implements OnInit {
  isCardExpanded = false;
  @Input() student: Student;

  constructor(private widgetService: WidgetService, private studentService: StudentService) { }

  toggleCardOpen(): void {
    this.isCardExpanded = !this.isCardExpanded;
  }

  openCouseList(student: Student): void {
    this.studentService.onSelectStudent(student);
    this.widgetService.openCourseWidget();

  }

  ngOnInit(): void {}

}
