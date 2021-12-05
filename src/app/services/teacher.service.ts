import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Teacher } from '../models/teacher.interface';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private http: HttpClient) { }

  getTeachers(): Observable<any>{
    return this.http.get(`${environment.apiUrl}/teacher`);
  }
  
  createTeacher(teacher: Teacher): Observable<any>{
    console.log(teacher);
    return this.http.post(`${environment.apiUrl}/teacher`, teacher);
  }
}
