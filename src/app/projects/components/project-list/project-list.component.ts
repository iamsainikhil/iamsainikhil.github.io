import { Component, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProjectsService } from '../../../shared/services/projects.service';
import { FilterService } from './../../../shared/services/filter.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit, OnDestroy {

  @Output() projectsData: any;
  @Output() showLoader = true;
  page = 'projects';
  chipName: string;

  private subscription: Subscription;

  constructor(
    private projectsService: ProjectsService,
    private filterService: FilterService
  ) { }

  ngOnInit() {
    this.filterService.chipName.subscribe((name) => {
      this.chipName = name;
      this.chipCondition(this.chipName);
    });
  }

  /**
   * conditions to highlight respective chips
   */
  chipCondition(data: string) {
    if (data === '' || data === 'latest') {
      this.latestClick();
    } else if (data === 'oldest') {
      this.oldestClick();
    } else if (data === 'websites') {
      this.websiteClick();
    } else if (data === 'web applications') {
      this.webAppClick();
    }
  }

  latestClick() {
    this.showLoader = true;
    this.subscription = this.projectsService.getProjectsData().subscribe(() => {
      this.projectsData = this.projectsService.getProjectsData();
      this.loaderOff();
    });
  }

  oldestClick() {
    this.showLoader = true;
    const subscription = this.projectsService.getOrderedProjectsData('dateAdded').subscribe(() => {
      this.projectsData = this.projectsService.getOrderedProjectsData('dateAdded');
      this.loaderOff();
    });
    this.subscription.add(subscription);
  }

  websiteClick() {
    this.showLoader = true;
    const subscription = this.projectsService.getQueriedProjectsData('website', '==', true)
    .subscribe(() => {
      this.projectsData = this.projectsService.getQueriedProjectsData('website', '==', true);
      this.loaderOff();
    });
    this.subscription.add(subscription);
  }

  webAppClick() {
    this.showLoader = true;
    const subscription = this.projectsService.getQueriedProjectsData('webApplication', '==', true).subscribe(() => {
      this.projectsData = this.projectsService.getQueriedProjectsData('webApplication', '==', true);
      this.loaderOff();
    });
    this.subscription.add(subscription);
  }

  loaderOff() {
    setTimeout(() => {
      this.showLoader = false;
    }, 100);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.filterService.chipName.next('');
  }

}

