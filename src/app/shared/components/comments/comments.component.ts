import { Component, Input, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs/Subscription";
import { GAService } from "./../../services/ga.service";
import { LikesCommentsService } from "./../../services/likes-comments.service";

@Component({
  selector: "app-comments",
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.css"],
})
export class CommentsComponent implements OnInit, OnDestroy {
  @Input() docId: string;
  @Input() collectionName: string;

  commentsData: any;

  commentsLoader = true;

  noComments = false;

  private subscription: Subscription;

  /**
   * default condition to highlight latest filter
   */
  latestChip = true;
  oldestChip = false;

  constructor(
    private likesCommentsService: LikesCommentsService,
    private gaService: GAService
  ) {}

  ngOnInit() {
    this.getLatestComments();
  }

  getLatestCommentsData() {
    this.oldestChip = false;
    this.latestChip = true;
    this.commentsLoader = true;
    this.getLatestComments();
  }

  getLatestComments() {
    this.subscription = this.likesCommentsService
      .getOrderedCommentsData(
        this.collectionName,
        this.docId,
        "dateAdded",
        "desc"
      )
      .subscribe((data) => {
        this.commentsData = this.likesCommentsService.getOrderedCommentsData(
          this.collectionName,
          this.docId,
          "dateAdded",
          "desc"
        );
        this.commentsLoader = false;
        this.noComments = data.length === 0;
      });
    // this.gaService.emitEvent(`${this.docId}-latest-comments`, 'filter-click', 'filter');
  }

  getOldestCommentsData() {
    this.latestChip = false;
    this.oldestChip = true;
    this.commentsLoader = true;
    const subscription = this.likesCommentsService
      .getOrderedCommentsData(
        this.collectionName,
        this.docId,
        "dateAdded",
        "asc"
      )
      .subscribe(() => {
        this.commentsData = this.likesCommentsService.getOrderedCommentsData(
          this.collectionName,
          this.docId,
          "dateAdded",
          "asc"
        );
        this.commentsLoader = false;
      });
    this.gaService.emitEvent(
      `${this.docId}-oldest-comments`,
      "filter-click",
      "filter"
    );
    this.subscription.add(subscription);
  }

  ngOnDestroy() {
    if (this.subscription !== undefined) {
      this.subscription.unsubscribe();
    }
  }
}
