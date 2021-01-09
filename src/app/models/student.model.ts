import Course from './course.model';

export default class Student {
  private _id: number;
  private _firstName: string;
  private _lastName: string;
  private _courses: Course[];

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get firstName(): string {
    return this._firstName;
  }

  get fullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  set firstName(value: string) {
    this._firstName = value;
  }

  get lastName(): string {
    return this._lastName;
  }

  set lastName(value: string) {
    this._lastName = value;
  }

  get courses(): Course[] {
    return this._courses;
  }

  set courses(value: Course[]) {
    this._courses = value;
  }
  constructor(courseObj: any) {
    this._id = courseObj.id;
    this._firstName = courseObj.firstName;
    this._lastName = courseObj.lastName;
    this._courses = courseObj.courses;
  }

  isCourseExist(id: number): boolean {
    return this.courses.filter(course => course.id === id).length === 1;
  }
}
