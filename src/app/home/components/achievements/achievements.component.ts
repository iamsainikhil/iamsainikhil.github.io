import { Component, Input, OnInit, Output, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { AchievementsService } from "../../../shared/services/achievements.service";
import { FilterService } from "../../../shared/services/filter.service";
import { GAService } from "../../../shared/services/ga.service";

@Component({
  selector: "app-achievements",
  templateUrl: "./achievements.component.html",
  styleUrls: ["./achievements.component.css"]
})
export class AchievementsComponent implements OnInit, OnDestroy {
  @Input() page: string;
  achievementsData: any;
  showLoader: boolean;
  chipName: string;

  // filter chips
  @Output() chipData = [
    {
      name: "show all",
      selected: true
    },
    {
      name: "awards",
      selected: false
    },
    {
      name: "testdome",
      selected: false
    },
    {
      name: "certificates",
      selected: false
    }
  ];

  private subscription: Subscription;

  constructor(
    private achievementsService: AchievementsService,
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
    if (data === "" || data === "show all") {
      this.defaultClick();
    } else if (data === "awards") {
      this.awardsClick();
    } else if (data === "testdome") {
      this.testDomeClick();
    } else if (data === "certificates") {
      this.certificatesClick();
    }
  }

  defaultClick() {
    this.showLoader = true;
    this.subscription = this.achievementsService
      .getAchievementsData()
      .subscribe(() => {
        this.achievementsData = this.achievementsService.getAchievementsData();
        this.loaderOff();
      });
  }

  certificatesClick() {
    this.showLoader = true;
    const subscription = this.achievementsService
      .getQueriedAchievementsData("certificate", "==", true)
      .subscribe(() => {
        this.achievementsData = this.achievementsService.getQueriedAchievementsData(
          "certificate",
          "==",
          true
        );
        this.loaderOff();
      });
    // adding child subscription to the parent
    this.subscription.add(subscription);
  }

  awardsClick() {
    this.showLoader = true;
    const subscription = this.achievementsService
      .getQueriedAchievementsData("award", "==", true)
      .subscribe(() => {
        this.achievementsData = this.achievementsService.getQueriedAchievementsData(
          "award",
          "==",
          true
        );
        this.loaderOff();
      });
    // adding child subscription to the parent
    this.subscription.add(subscription);
  }

  testDomeClick() {
    this.showLoader = true;
    const subscription = this.achievementsService
      .getQueriedAchievementsData("testdome", "==", true)
      .subscribe(() => {
        this.achievementsData = this.achievementsService.getQueriedAchievementsData(
          "testdome",
          "==",
          true
        );
        this.loaderOff();
      });
    // adding child subscription to the parent
    this.subscription.add(subscription);
  }

  loaderOff() {
    setTimeout(() => {
      this.showLoader = false;
    }, 100);
  }

  buttonClick(id) {
    this.gaService.emitEvent(`${id}-view`, "achievement-view", "button");
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    this.filterService.chipName.next("");
  }
}
