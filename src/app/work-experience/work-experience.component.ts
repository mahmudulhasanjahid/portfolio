import { Component, OnInit } from '@angular/core';
import { WorkExperience } from '../models/models';

@Component({
  selector: 'work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css'],
})
export class WorkExperienceComponent implements OnInit {
  workExpList: WorkExperience[] = [
    {
      role: 'Manager',
      company: 'Janani tour & travels',
      duration: 'May 2019 - december 2020',
      description: [
        'Working to manage client and office.',
        
      ],
    },
    {
      role: 'Manager',
      company: 'Sneha Trade & Travels',
      duration: 'January 2021 - March 2023',
      description: [
        'Involved in various Public talks',
        'Working to manage client and office.',
      ],
    },
   
  ];
  constructor() {}

  ngOnInit(): void {}
}
