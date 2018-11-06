import { Component, Input, OnInit } from '@angular/core';
import { GAService } from './../../services/ga.service';
import { LikesCommentsService } from './../../services/likes-comments.service';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  @Input() docId: string;
  @Input() collectionName: string;
  /**
   * condition to show comment form & avatar component when user clicks
   * leave a comment button
   */
  showCommentForm = false;
  /**
   * success message after user leaves a comment
   */
  successMessage = false;

  /**
   * data from avatar component
   */
  gender: string;
  avatarUrl: string;

  commentFormData: any;

  date = new Date();

  constructor(
    private likesCommentsService: LikesCommentsService,
    private gaService: GAService
  ) { }

  ngOnInit() {
  }

  showForm() {
    if (this.showCommentForm === false) {
      this.showCommentForm = true;
      this.gaService.emitEvent(`${this.docId}-show-comment-form`, 'show-comment-form', 'button');
    } else {
      this.showCommentForm = false;
      this.avatarUrl = undefined;
      this.gaService.emitEvent(`${this.docId}-hide-comment-form`, 'hide-comment-form', 'button');
    }
  }


  onSubmit(f) {
    this.commentFormData = {
      name: f.value.name,
      email: f.value.email,
      message: f.value.message,
      dateAdded: this.date,
      approved: false,
      gender: this.gender,
      avatarUrl: this.avatarUrl
    };
    this.likesCommentsService.addCommentsData(this.collectionName, this.docId, this.commentFormData);
    this.successMessage = true;
    this.showCommentForm = false;
    this.gaService.emitEvent(`${this.docId}-submit-comment`, 'submitted comment', 'button');
  }

  sendAnotherComment() {
    this.successMessage = false;
    this.showCommentForm = true;
    this.gaService.emitEvent(`${this.docId}-send-another-comment`, 'send-another-comment', 'button');
  }

  onGender(e) {
    this.gender = e;
    this.gaService.emitEvent(`${this.docId}-gender-select`, 'gender-select', 'button');
  }

  onAvatarUrl(e) {
    this.avatarUrl = e;
    this.gaService.emitEvent(`${this.docId}-avatar-select`, 'avatar-select', 'button');
  }

  legalItemsClick(name) {
    this.gaService.emitEvent(`${name}-comments-form`, 'legal-items-comment-form', 'accept-checkbox');
  }
}
