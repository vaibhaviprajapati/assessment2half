/**
 * @author Vaibhavi Prajapati
*/
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Student } from '../student.model';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public studentForm :FormGroup;
  public students: Student[];
  constructor(private fb: FormBuilder,
              private studentService :StudentService,
              private router:Router) {
                this.students=[];
               }

  ngOnInit() {
    /**
     * validation for reactive form
     */
    this.studentForm = this.fb.group({
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      age: ['',[Validators.required]],
      address: ['',[Validators.required]]
    });
  }

  public addStudent(student: Student):void
  {
    this.studentService.addStudent(this.studentForm.value).subscribe(
      student => {this.students.push(student);
      this.router.navigate(['student/view']);}
    )
  }

}
