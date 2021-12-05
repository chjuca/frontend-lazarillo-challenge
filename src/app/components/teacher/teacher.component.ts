import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers = [];
  teachersFilter = []

  constructor(public teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(data => {
      this.teachers = data;
      console.log(data);
      this.teachersFilter = this.teachers;
    });
  }

  onSearchChange(searchValue: string): void {
    if (searchValue.length === 0) {
      this.teachersFilter= this.teachers;
    } else {
      this.teachersFilter = this.teachers.filter(teacher => teacher.name.startsWith(searchValue));
    }
  }


}
