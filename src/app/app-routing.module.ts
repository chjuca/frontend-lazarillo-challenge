import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherEditFormComponent } from './components/teacher-edit-form/teacher-edit-form.component';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  {path: 'teachers-form', component: TeacherFormComponent},
  {path: 'teacher/:id', component: TeacherEditFormComponent},
  {path: 'teachers', component: TeacherComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
