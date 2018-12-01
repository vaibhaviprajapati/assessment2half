import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Student } from '../student.model';
import { StudentService } from '../student.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public studentForm :FormGroup;
  public student: Student;
  id:number;
  constructor(private fb: FormBuilder,
    private studentService :StudentService,
    private router:Router,
    private route:ActivatedRoute) {
      this.student = new Student;
      this.id= +this.route.snapshot.paramMap.get('id');
     }

  ngOnInit() {
    this.editStudent(this.id);
    this.studentForm = this.fb.group({
      id: ['',[Validators.required]],
      fname: ['',[Validators.required]],
      lname: ['',[Validators.required]],
      age: ['',[Validators.required]],
      address: ['',[Validators.required]]
    });
  }

  public editStudent(id:number):void
  {
   this.studentService.editStudent(id).subscribe(student => {this.getList(student);});
  }
  public getList(student:Student)
  {

    this.student =student;
    console.log(this.student);
    this.studentForm.patchValue({
    id: this.student.id,
    fname : this.student.fname,
    lname: this.student.lname,
    age:this.student.age,
    address: this.student.address,
  });
  }
  public updatestudent() :void
  {
    debugger;
    this.studentService.updateStudent(this.studentForm.value).subscribe(
      ()=>{this.studentForm.reset();
      this.router.navigate(['/student/view']);}
    );
  }
}
