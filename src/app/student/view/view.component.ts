import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public students: Student[];
  public headers=['id','fname','lname','age','address'];
  constructor(private studentService :StudentService) { }

  ngOnInit()
   {
    console.log(this.students);
    console.log(this.headers);
     this.getStudents();
  }
    public getStudents():void
    {
      this.studentService.getStudents().subscribe(student =>
        { this.students= student});
    }

    public deleteStudent(id:number):void
    {
      this.studentService.deleteStudent(id).subscribe(data=>{this.getStudents();});
      alert("are you sure you want to delete ");
    }
}
