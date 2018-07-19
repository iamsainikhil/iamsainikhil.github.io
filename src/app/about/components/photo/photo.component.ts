import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from '../../../shared/services/common.service';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit, OnDestroy {

  showLoader = true;
  photoData: any;

  subscription: Subscription;

  @Input() docId: string;

  get id(): string {
    const segments: UrlSegment[] = this.route.snapshot.url;
    let url = '';
    if (segments.length === 3) {
      url = segments[2].path;
    }
    return url;
  }

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
  ) { }

  ngOnInit() {
    // to support both photos?title=id link and direct photos/:id link
    if (this.id === '') {
      this.getPhotoData(this.docId);
    } else {
      this.getPhotoData(this.id);
    }
  }

  getPhotoData(id) {
    //
    this.subscription = this.commonService.getDocumentData('photos', id, {timestamp: true})
    .subscribe(() => {
      this.photoData = this.commonService.getDocumentData('photos', id, {timestamp: true});
      this.showLoader = false;
    });
  }

  closeModal() {
    this.router.navigate(['about/photos'],  {queryParams: {show: 'all'}});
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
