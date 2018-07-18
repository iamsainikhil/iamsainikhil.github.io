import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { GAService } from './../../services/ga.service';
import { LikesCommentsService } from './../../services/likes-comments.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit, OnDestroy {

  @Input() docId: string;
  @Input() collectionName: string;

  commentsData: any;

  commentsLoader = true;

  private subscription: Subscription;

  /**
   * default condition to highlight latest filter
   */
  latestChip = true;
  oldestChip = false;

  constructor(
    private likesCommentsService: LikesCommentsService,
    private gaService: GAService
  ) { }

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
    this.subscription = this.likesCommentsService.getCommentsData(this.collectionName, this.docId, 'approved', '==', true).subscribe(() => {
      this.commentsData = this.likesCommentsService.getCommentsData(this.collectionName, this.docId, 'approved', '==', true);
      this.commentsLoader = false;
    });
    // this.gaService.emitEvent(`${this.docId}-latest-comments`, 'filter-click', 'filter');

  }

  getOldestCommentsData() {
    this.latestChip = false;
    this.oldestChip = true;
    this.commentsLoader = true;
    const subscription =
    this.likesCommentsService.getOrderedCommentsData(this.collectionName, this.docId, 'dateAdded').subscribe(() => {
      this.commentsData = this.likesCommentsService.getOrderedCommentsData(this.collectionName, this.docId, 'dateAdded');
      this.commentsLoader = false;
    });
    this.gaService.emitEvent(`${this.docId}-oldest-comments`, 'filter-click', 'filter');
    this.subscription.add(subscription);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
