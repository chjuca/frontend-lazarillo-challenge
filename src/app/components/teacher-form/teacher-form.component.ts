import { Component, OnInit } from '@angular/core';
import { Teacher } from 'src/app/models/teacher.interface';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-form',
  templateUrl: './teacher-form.component.html',
  styleUrls: ['./teacher-form.component.css']
})
export class TeacherFormComponent implements OnInit {


  teacher = {} as Teacher
  subject = ''
  subjects = []
  types = ['Full-Time', "Part-Time"]
  successfully = false

  constructor(public teacherService: TeacherService) { }

  ngOnInit(): void {
  }

  addTeacher(){
    this.teacher.subjects = this.subjects;
    this.teacherService.createTeacher(this.teacher).subscribe(data =>{
      if(data.ok == true){
        this.successfully = true;
        this.teacher = {} as Teacher
        this.subject = "";
        this.subjects = [];
      }
    });
  }

  validateForm(): boolean {
    if (this.teacher.name && this.teacher.direction && this.teacher.dateBirth && this.teacher.typeContract && (this.subjects.length > 0)) {
      return false
    }
    else {
      return true
    }
  }

  addSubject() {
    this.subjects.push(this.subject);
    this.subject= '';
  }

  removeSubject(subject: string) {
    for (let i = 0; i < this.subjects.length; i++) {
      if (this.subjects[i] === subject) {
        this.subjects.splice(i, 1);
      }
    }
  }

}
