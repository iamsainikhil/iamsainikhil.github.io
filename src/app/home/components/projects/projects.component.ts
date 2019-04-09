import { Component, Input, OnInit, Output, OnDestroy } from "@angular/core";
import { GAService } from "./../../../shared/services/ga.service";
import { ProjectsService } from "./../../../shared/services/projects.service";
import { Subscription } from "rxjs/Subscription";
import { FilterService } from "./../../../shared/services/filter.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"]
})
export class ProjectsComponent implements OnInit, OnDestroy {
  @Input() page: string;
  projectsData: any;
  showLoader: boolean;
  chipName: string;

  private subscription: Subscription;

  // filter chips
  @Output() chipData = [
    {
      name: "latest",
      selected: true
    },
    {
      name: "oldest",
      selected: false
    },
    {
      name: "websites",
      selected: false
    },
    {
      name: "web applications",
      selected: false
    }
  ];

  constructor(
    private projectsService: ProjectsService,
    private filterService: FilterService,
    private gaService: GAService
  ) {}

  ngOnInit() {
    this.filterService.chipName.subscribe(name => {
      this.chipName = name;
      this.chipCondition(this.chipName);
    });
  }

  /**
   * conditions to highlight respective chips
   */
  chipCondition(data: string) {
    if (data === "" || data === "latest") {
      this.latestClick();
    } else if (data === "oldest") {
      this.oldestClick();
    } else if (data === "websites") {
      this.websiteClick();
    } else if (data === "web applications") {
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
    const subscription = this.projectsService
      .getOrderedProjectsData("dateAdded")
      .subscribe(() => {
        this.projectsData = this.projectsService.getOrderedProjectsData(
          "dateAdded"
        );
        this.loaderOff();
      });
    this.subscription.add(subscription);
  }

  websiteClick() {
    this.showLoader = true;
    const subscription = this.projectsService
      .getQueriedProjectsData("website", "==", true)
      .subscribe(() => {
        this.projectsData = this.projectsService.getQueriedProjectsData(
          "website",
          "==",
          true
        );
        this.loaderOff();
      });
    this.subscription.add(subscription);
  }

  webAppClick() {
    this.showLoader = true;
    const subscription = this.projectsService
      .getQueriedProjectsData("webApplication", "==", true)
      .subscribe(() => {
        this.projectsData = this.projectsService.getQueriedProjectsData(
          "webApplication",
          "==",
          true
        );
        this.loaderOff();
      });
    this.subscription.add(subscription);
  }

  loaderOff() {
    setTimeout(() => {
      this.showLoader = false;
    }, 100);
  }

  buttonClick(name, id) {
    this.gaService.emitEvent(`${id}-view`, name, "button");
  }

  ngOnDestroy() {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
    this.filterService.chipName.next("");
  }
}
