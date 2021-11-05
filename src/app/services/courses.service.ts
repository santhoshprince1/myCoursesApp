import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable} from "rxjs";
import { courses } from '../interface/courses';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private httpClient:HttpClient) { }
  getAllCourses():Observable<courses[]>{
    return this.httpClient.get<courses[]>(`http://localhost:3000/courses`);
  }
}
