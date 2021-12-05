import { Component, OnInit } from '@angular/core';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  teachers = [];

  constructor(public teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacherService.getTeachers().subscribe(data => {
      this.teachers = data;
      console.log(this.teachers);
    });
  }

}
