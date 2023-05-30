import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit {
  myData: string[][] = [
    ['Name', 'Mahmudul Hasan Jahid'],
    ['DOB', '28/09/2003'],
    ['Work Exp', '5 Year'],
    ['Education', 'B.A (Running).'],
    ['Interests', 'Travelling'],
  ];

  aboutMe: string[] = [
    'I am a developer who loves to create innovative and useful applications for various platforms. I enjoy learning new technologies and skills to improve my coding abilities. Besides programming, I have a passion for travelling and exploring different cultures and places. I believe that travelling enriches my life and broadens my perspective. I always look for opportunities to combine my work and travel interests, such as attending conferences.'
  ];

  constructor() {}

  ngOnInit(): void {}
}
