import { Component, OnInit } from '@angular/core';
import { Project } from '../shared/project';
import { PROJECTS } from '../shared/projects';
import { ProjectService } from '../services/project.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
 projects: Project[];
 selectedProject: Project;
  constructor(private projectService:ProjectService) { }

  ngOnInit() {
    this.projects = this.projectService.getProjects();
  }
  onSelect(project:Project){
    this.selectedProject = project;
  }

}
