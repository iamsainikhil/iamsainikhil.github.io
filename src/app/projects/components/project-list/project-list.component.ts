import { Component, OnDestroy, OnInit, Output } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { ProjectsService } from "../../../shared/services/projects.service";
import { FilterService } from "./../../../shared/services/filter.service";

@Component({
  selector: "app-project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.css"]
})
export class ProjectListComponent {
  constructor() {}
}
