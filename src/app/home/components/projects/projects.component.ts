import { Component, Input, OnInit, Output } from '@angular/core';
import { Project } from '../../../shared/models/project';
import { GAService } from './../../../shared/services/ga.service';
import { ProjectsService } from './../../../shared/services/projects.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  @Input() projectsData: Array<Project>;
  @Input() page: any;
  @Input() showLoader: boolean;

  // filter chips
  @Output() chipData = [
    {
      name: 'latest',
      selected: true
    },
    {
      name: 'oldest',
      selected: false
    },
    {
      name: 'websites',
      selected: false
    },
    {
      name: 'web applications',
      selected: false
    }
  ];

  constructor(
    private projectsService: ProjectsService,
    private gaService: GAService
  ) { }

  ngOnInit() {
  }

  buttonClick(name, id = null) {
    if (id !== null) {
      this.gaService.emitEvent(`${id}-view`, 'project-view', 'button');
    } else {
      this.gaService.emitEvent(`${name}-projects-on-${this.page}`, 'projects-section', 'button');
    }
  }

}
