import { Component, OnInit } from '@angular/core';
import { courses } from 'src/app/interface/courses';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './getallcourses.component.html',
  styleUrls: ['./getallcourses.component.css'],
  providers:[
    CoursesService
  ]
})
export class GetallcoursesComponent implements OnInit {
  courseList:Array<courses>;
  constructor(private courseService:CoursesService) {
    this.courseList=new Array<courses>();
   }

  ngOnInit(): void {
    this.courseService.getAllCourses().subscribe((data)=>{this.courseList=data;
      console.log(this.courseList);});
  }

}
