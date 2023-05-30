import { Component, OnInit } from '@angular/core';
import { Project } from '../models/models';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [
    {
      title: 'Portfolio',
      technologies: 'Angular, Html, Css, Typescript, Angular Material.',
      description: [
        'Creating Own Portfolio',
       
      ],
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
