import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';

const PROJECTS: Project[] = [
  {
    id: '1',
    name: 'Digi Suchna',
    image: '',
    category: 'Web',
    description: 'A web application for notices',
    developers: 'Nishchal garg, Pulkit Agrawal'
  },
  {
    id: '2',
    name: 'Search Engine',
    image: '',
    category: 'Machine Learning',
    description: 'Search engine for E-commerce Website',
    developers: 'Ritwik Tiwari, Mayank Fulera and Nishchal garg'
  }
];
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  projects = PROJECTS;
  selectedProject = PROJECTS[0];
  constructor() { }

  ngOnInit() {
  
  }

}
