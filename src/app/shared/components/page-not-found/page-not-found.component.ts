import { Component } from "@angular/core";
import { Router, NavigationEnd, RouterEvent } from "@angular/router";
import { Location } from "@angular/common";
import { filter } from "rxjs/operators";

@Component({
  selector: "app-page-not-found",
  templateUrl: "./page-not-found.component.html",
  styleUrls: ["./page-not-found.component.css"]
})
export class PageNotFoundComponent {
  constructor(router: Router, location: Location) {
    router.events
      .pipe(filter((event: RouterEvent) => event instanceof NavigationEnd))
      .subscribe(x => {
        router
          .navigate(["/404"], { skipLocationChange: true })
          .then(() => location.go(x.url));
      });
  }
}
