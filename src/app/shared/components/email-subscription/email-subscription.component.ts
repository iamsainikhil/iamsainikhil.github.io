import { Component, OnInit, Input } from '@angular/core';
import { LikesCommentsService } from '../../services/likes-comments.service';

@Component({
  selector: 'app-email-subscription',
  templateUrl: './email-subscription.component.html',
  styleUrls: ['./email-subscription.component.css']
})
export class EmailSubscriptionComponent implements OnInit {
  @Input() tabName: string;
  timeCounter: any;
  date = new Date();
  subscriberEmail = '';
  successMessage = false;
  accepted = false;
  tempDate = new Date();
  expectedLaunchDate = new Date('2020-01-20');
  nonExpiryDate = this.tempDate.setTime(this.expectedLaunchDate.getTime() + 7 * 86400000);

  constructor(
    private likesCommentsService: LikesCommentsService
  ) { }

  ngOnInit() {
    this.getTimeCounter();
  }

  getTimeCounter() {
    this.timeCounter = this.likesCommentsService.dateDifference(
      new Date(this.nonExpiryDate),
      'object'
    );
    // to update timeCounter every one second
    setInterval(() => {
      this.timeCounter = this.likesCommentsService.dateDifference(
        new Date(this.nonExpiryDate),
        'object'
      );
    }, 1000);
  }

  emailSubscribe() {
    this.likesCommentsService.addSubscribersData(
      this.date,
      this.subscriberEmail,
      this.tabName
    );
    this.subscriberEmail = '';
    this.accepted = false;
    this.successMessage = true;
  }

  dismissToast() {
    this.successMessage = false;
  }

  // expand the subscribe email field
  updateWidth() {
    const width = 400 + this.subscriberEmail.trim().length * 5;
    return `${width}px`;
  }
}
