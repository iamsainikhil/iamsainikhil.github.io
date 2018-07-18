import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, UrlSegment } from '@angular/router';
import { GAService } from './../../../shared/services/ga.service';
import { ModalService } from './../../../shared/services/modal.service';

@Component({
  selector: 'app-tab-list',
  templateUrl: './tab-list.component.html',
  styleUrls: ['./tab-list.component.css']
})
export class TabListComponent implements OnInit {

  bioActive = true;
  blogActive = false;
  photoActive = false;
  videoActive = false;

  imagesData: any;

  routeUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private modalService: ModalService,
    private gaService: GAService
  ) {
  }

  ngOnInit() {
    const segments: UrlSegment[] = this.route.snapshot.url;
    if (segments[1] !== undefined) {
      this.routeUrl = segments[1].path;
      this.activeCondition(this.routeUrl);
    }
  }

  activeCondition(data) {
    if (data === 'biography') {
      this.bioActive = true;
      this.blogActive = false;
      this.photoActive = false;
      this.videoActive = false;
      this.modalService.scroll.next(false);
    } else if (data === 'blog') {
      this.bioActive = false;
      this.blogActive = true;
      this.photoActive = false;
      this.videoActive = false;
      this.modalService.scroll.next(false);
    } else if (data === 'photos') {
      this.bioActive = false;
      this.blogActive = false;
      this.photoActive = true;
      this.videoActive = false;
      this.modalService.scroll.next(true);
    } else {
      this.bioActive = false;
      this.blogActive = false;
      this.photoActive = false;
      this.videoActive = true;
      this.modalService.scroll.next(false);
    }
  }

  bioClick() {
    // to not make biography load under other sub-pages of about
    // instead re-direct to about and usual tab behavior follows
    if (this.routeUrl === undefined) {
        this.activeCondition('biography');
        this.gaService.emitEvent('bio-active-about-page', 'about-page', 'tab-button');
    } else {
      this.router.navigateByUrl('/about');
    }
  }

  blogClick() {
    if (this.routeUrl === undefined) {
        this.activeCondition('blog');
        this.gaService.emitEvent('blog-active-about-page', 'about-page', 'tab-button');
    } else if (this.routeUrl === 'blog') {
      this.activeCondition('blog');
      this.gaService.emitEvent('blog-active-blog-page', 'blog-page', 'tab-button');
    } else {
      this.router.navigateByUrl('/about/blog');
    }
  }

  photoClick() {
    if (this.routeUrl === undefined) {
        this.activeCondition('photos');
        this.gaService.emitEvent('photos-active-about-page', 'about-page', 'tab-button');
    } else if (this.routeUrl === 'photos') {
      this.activeCondition('photos');
      this.gaService.emitEvent('photos-active-photos-page', 'photos-page', 'tab-button');
    } else {
      this.router.navigateByUrl('/about/photos');
    }
  }

  videoClick() {
    if (this.routeUrl === undefined) {
        this.activeCondition('videos');
        this.gaService.emitEvent('videos-active-about-page', 'about-page', 'tab-button');
    } else if (this.routeUrl === 'videos') {
      this.activeCondition('videos');
      this.gaService.emitEvent('videos-active-videos-page', 'videos-page', 'tab-button');
    } else {
      this.router.navigateByUrl('/about/videos');
    }
  }

}
