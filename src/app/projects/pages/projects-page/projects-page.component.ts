import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent implements OnInit {

  page = 'projects';

  constructor() { }

  ngOnInit() {
  }

}
