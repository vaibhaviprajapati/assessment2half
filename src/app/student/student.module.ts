import { StudentRoutingModule } from './student-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { StudentService } from './student.service';
import {ReactiveFormsModule} from '@angular/forms'
import { TableComponent } from './view/table/table.component';

@NgModule({
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [AddComponent, ViewComponent, EditComponent, TableComponent],
  providers: [StudentService]
})
export class StudentModule { }
