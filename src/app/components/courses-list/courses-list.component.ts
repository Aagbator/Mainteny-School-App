import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import Course from '../../models/course.model';
import {WidgetService} from '../../services/widget/widget.service';
import {CourseService} from '../../services/course/course.service';
import {StudentService} from '../../services/student/student.service';
import Student from '../../models/student.model';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {
  isCourseListOpen: boolean;
  courses: Course[];
  selectedStudent: Student;

  constructor(
    public widgetService: WidgetService,
    private courseService: CourseService,
    private studentService: StudentService) {}

  ngOnInit(): void {
    this.widgetService.isCourseWidgetOpen.subscribe(val => {
      this.isCourseListOpen = val;
    });

    this.studentService.selectedStudent.subscribe(selectedStudent => {
      this.selectedStudent = selectedStudent;
    });

    // get courses and popuplate the courses array
    this.populateCourses();
  }

  populateCourses(): void {
    this.courseService.getCourses().subscribe(res => {
      this.courses = res;
    });
  }

  closeCourseList(): void{
    this.widgetService.closeCourseWidget();
  }

  selectCourse(course): void {
    const student = new Student(this.selectedStudent);
    // add course to student if it dosen\'t exist before
    if (!student.isCourseExist(course.id)){
      student.courses.push(course);

      // converted back to json because I used json server
      const studentJsonObj: any = {
        id: student.id,
        firstName: student.firstName,
        lastName: student.lastName,
        courses: student.courses
      };

      this.studentService.updateStudentById(student.id, studentJsonObj).subscribe(res => {
        this.widgetService.closeCourseWidget();
      });
    }
  }
}
