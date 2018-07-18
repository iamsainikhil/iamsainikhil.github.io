import { Component, Input, OnDestroy, OnInit, SecurityContext } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from './../../../shared/services/common.service';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.css']
})
export class BlogPostComponent implements OnInit, OnDestroy {

  postData: any;
  postSubCollectionDocumentData: any;
  showLoader = true;
  postContentLoader = true;

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
    private _sanitizer: DomSanitizer
  ) { }

  ngOnInit() {
    // to support both blog?title=id link and direct blog/:id link
    if (this.id === '') {
      this.getBlogPostData(this.docId);
      this.getBlogPostSCDData(this.docId);
    } else {
      this.getBlogPostData(this.id);
      this.getBlogPostSCDData(this.id);
    }
  }

  getBlogPostData(id) {
    this.subscription = this.commonService.getDocumentData('blogs', id, {timestamp: true})
    .subscribe(() => {
      this.postData = this.commonService.getDocumentData('blogs', id, {timestamp: true});
      this.showLoader = false;
    });
  }

  getBlogPostSCDData(id) {
    const subscription = this.commonService.getSubCollectionDocumentData('blogs', id, 'content', 'post')
      .subscribe(() => {
        this.postSubCollectionDocumentData =
        this.commonService.getSubCollectionDocumentData('blogs', id, 'content', 'post');
        this.postContentLoader = false;
      });
      this.subscription.add(subscription);
  }

  /**
   * Sanitize the html tags of about Info
   * @param data
   */

  public getSanitizedHtml(data): string {
    return this._sanitizer.sanitize(SecurityContext.HTML, this.escapeHtml(data));
  }

  escapeHtml(unsafe) {
  return unsafe.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  closePost() {
    this.router.navigate(['/about/blog'], {queryParams: {show: 'all'}});
  }

}
