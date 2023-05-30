import { Component, OnInit } from '@angular/core';
import { Skill } from '../models/models';

@Component({
  selector: 'skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  skills: Skill[] = [
    {
      name: 'Angular, Angular Material',
      level: 'Expert',
      rating: 80,
    },
    
    {
      name: 'HTML, CSS,',
      level: 'Expert',
      rating: 90,
    },
    {
      name: 'Typescript',
      level: 'Intermidiate',
      rating: 75,
    },
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
