import { Component, OnInit } from '@angular/core';
import { Education } from '../models/models';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [
    {
      institute: "Islamic Arabic University",
      course: 'B.A',
      duration: '1st Year Running',
      score: '80%',
    },
    {
      institute: 'Sylhet Govt Alia Madrasa',
      course: 'H.S.C (Alim)',
      duration: '2019-2020',
      score: '75%',
    },
    {
      institute: 'Sylhet Govt Alia Madrasa',
      course: 'S.S.C(Dakhil)',
      duration: '2017-2018',
      score: '70%',
    },
    {
      institute: 'Softlab IT',
      course: 'Advance Web-development',
      duration: 'March 2023',
      score: 'Not-Resulted',
    },
    
  ];

  constructor() {}

  ngOnInit(): void {}
}
