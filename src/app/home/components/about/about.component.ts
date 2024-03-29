import { Component, OnDestroy, OnInit, SecurityContext } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { Subscription } from "rxjs/Subscription";
import { AboutService } from "../../../shared/services/about.service";
import { GAService } from "./../../../shared/services/ga.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit, OnDestroy {
  aboutData: any;
  aboutCardData: any;
  showLoader = true;

  // products button data
  productsData = [
    {
      name: "view blog",
      link: "https://blog.iamsainikhil.com",
    },
    {
      name: "listen music",
      link: "https://soundcloud.com/iamsainikhil",
    },
    {
      name: "view photos",
      link: "https://gurushots.com/iamsainikhil/photos",
    }
  ];

  private subscription: Subscription;

  constructor(
    private aboutService: AboutService,
    private _sanitizer: DomSanitizer,
    private gaService: GAService
  ) {}

  ngOnInit() {
    this.aboutCardData = this.aboutService.getAboutCardData();
    this.subscription = this.aboutService.getAboutData().subscribe(() => {
      this.aboutData = this.aboutService.getAboutData();
      this.showLoader = false;
    });
  }

  buttonClick(name) {
    this.gaService.emitEvent(
      `${name}-about-section`,
      "buttons-about-section",
      "button"
    );
  }

  cardItemClick(name) {
    this.gaService.emitEvent(`${name}-about-card`, "about-card", "link");
  }

  /**
   * Sanitize the html tags of about Info
   * @param data
   */
  getSanitizedHtml(data) {
    return this._sanitizer.sanitize(SecurityContext.HTML, data);
  }

  ngOnDestroy() {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
