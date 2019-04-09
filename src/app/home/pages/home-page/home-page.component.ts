import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { ProjectsService } from "../../../shared/services/projects.service";

@Component({
  selector: "app-home-page",
  templateUrl: "./home-page.component.html",
  styleUrls: ["./home-page.component.css"]
})
export class HomePageComponent implements OnInit, OnDestroy {
  projectsData: any;
  page = "home";
  showLoader = true;

  private subscription: Subscription;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.subscription = this.projectsService
      .getLimitedProjectsData(6)
      .subscribe(() => {
        this.projectsData = this.projectsService.getLimitedProjectsData(6);
        this.showLoader = false;
      });
  }

  ngOnDestroy() {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
