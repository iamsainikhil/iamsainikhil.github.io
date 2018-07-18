import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProjectsService } from '../../../shared/services/projects.service';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit, OnDestroy {

  storyData: any;
  showLoader = true;
  /**
   * projectId from project page
   */
  @Input() projectId: string;

  private subscription: Subscription;

  constructor(private projectsService: ProjectsService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.subscription = this.projectsService.getStoryData(this.projectId).subscribe(() => {
      this.storyData = this.projectsService.getStoryData(this.projectId);
      this.showLoader = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
