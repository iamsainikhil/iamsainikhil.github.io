import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ProjectsService } from '../../../shared/services/projects.service';
import { AchievementsService } from './../../../shared/services/achievements.service';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit, OnDestroy {

  projectsData: any;
  achievementsData: any;
  page = 'home';
  showLoader = true;

  private subscription: Subscription;

  constructor(
    private projectsService: ProjectsService,
    private achievementsService: AchievementsService
  ) { }

  ngOnInit() {
    this.projectsData = this.projectsService.getLimitedProjectsData(6);
    this.subscription = this.achievementsService.getLimitedAchievementsData(6).subscribe(() => {
      this.achievementsData = this.achievementsService.getLimitedAchievementsData(6);
      this.showLoader = false;
    });

  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
