import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TeacherFormComponent } from './components/teacher-form/teacher-form.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  {path: 'teachers-form', component: TeacherFormComponent},
  {path: 'teachers', component: TeacherComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
