import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Teacher } from 'src/app/models/teacher.interface';
import { TeacherService } from 'src/app/services/teacher.service';

@Component({
  selector: 'app-teacher-edit-form',
  templateUrl: './teacher-edit-form.component.html',
  styleUrls: ['./teacher-edit-form.component.css']
})
export class TeacherEditFormComponent implements OnInit {

  teacherID: string;
  teacher = {} as Teacher
  subject = ''
  subjects = []
  types = ['Full-Time', "Part-Time"]
  successfully = false

  constructor(public router: Router, public route: ActivatedRoute, public teacherService: TeacherService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {

      if (params.has('id')) {
        this.teacherID = params.get('id');
      }
    });
    this.teacherService.getTeacherByID(this.teacherID).subscribe(data=>{
      this.teacher = data as Teacher; 
      this.subjects = data.subjects
      console.log(this.teacher)
    })
  }

  updateTeacher(){
    this.teacher.id = this.teacherID;
    this.teacher.subjects = this.subjects;
    this.teacherService.updateTeacher(this.teacher).subscribe(data =>{
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
