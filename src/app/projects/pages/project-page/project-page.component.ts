import { GAService } from './../../../shared/services/ga.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { ProjectsService } from './../../../shared/services/projects.service';


@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css']
})
export class ProjectPageComponent implements OnInit, OnDestroy {

  showLoader = true;
  /**
   * data
   */
  projectData: any;

  /**
   * Gets the companyId from the current route
   * @return {string}
   */
  get projectId(): string {
    const segments: UrlSegment[] = this.route.snapshot.url;
    return segments[1].path;
  }

  private subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private projectsService: ProjectsService,
    private gaService: GAService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.subscription = this.projectsService.getProjectData(this.projectId).subscribe(() => {
      this.projectData = this.projectsService.getProjectData(this.projectId);
      this.showLoader = false;
    });
  }

  buttonClick(purpose = 'direct') {
    this.gaService.emitEvent(`view-${this.projectId}-${purpose}-clicked-on-project-page`, `project-view-${purpose}`, 'button');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
