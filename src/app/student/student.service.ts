import { Student } from './student.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class StudentService {
  public studentURL = " http://localhost:3000/student";
  constructor(private http :HttpClient) { }

 public getStudents():Observable<Student[]>
 {
   return this.http.get<Student[]>(this.studentURL);
 }
 public addStudent(student:Student): Observable<Student>
 {
   return this.http.post<Student>(this.studentURL, student);
 }
 public deleteStudent(id:number): Observable<Student[]>
 {
   const url = `${this.studentURL}/${id}`;
   return this.http.delete<Student[]>(url);
 }
 public editStudent(id:number): Observable<Student>
 {
  const url = `${this.studentURL}/${id}`;
  return this.http.get<Student>(url);
 }
 public updateStudent(student:Student) : Observable<Student>
  {
    const url = `${this.studentURL}/${student.id}`;
    return this.http.put<Student>(url, student);
  }
}
