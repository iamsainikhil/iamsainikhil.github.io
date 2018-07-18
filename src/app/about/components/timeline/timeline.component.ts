import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from './../../../shared/services/common.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit, OnDestroy {

  showLoader = true;
  timelineData: any;
  subscription: Subscription;

  constructor(private commonService: CommonService) { }

  ngOnInit() {
    this.getTimelineData();
  }

  getTimelineData() {
    this.subscription =
    this.commonService.getCollectionData('biography', {timestamp: false})
      .subscribe(() => {
        this.timelineData = this.commonService.getCollectionData('biography', {timestamp: false});
        this.showLoader = false;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
