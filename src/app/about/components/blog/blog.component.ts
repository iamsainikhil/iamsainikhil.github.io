import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { CommonService } from '../../../shared/services/common.service';
import { GAService } from './../../../shared/services/ga.service';
import { ModalService } from './../../../shared/services/modal.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit, OnDestroy {

  blogData: any;
  blogPostLoader = false;
  showLoader = true;
  clickId: string;

  showModal: boolean;
  docId: string;

  subscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commonService: CommonService,
    private modalService: ModalService,
    private gaService: GAService
  ) { }

  ngOnInit() {
    this.getBlogsData();

    // query params
    this.route.queryParams.subscribe((params) => {
      if (params.title !== undefined) {
        const name = params.title;
        this.openModal(name);
      } else {
        this.modalService.showModal.next(false);
      }
    });

    this.modalService.scroll.next(true);
    this.modalService.showModal.subscribe((res) => {
      this.showModal = res;
    });
  }

  getBlogsData() {
    this.subscription = this.commonService.getCollectionData('blogs', {
      operator: '==',
      value: false,
      complexField: 'archive',
      order: true,
      timestamp: true
    }).subscribe(() => {
      this.blogData = this.commonService.getCollectionData('blogs', {
        operator: '==',
        value: false,
        complexField: 'archive',
        order: true,
        timestamp: true
      });
      this.showLoader = false;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  openModal(id) {
    this.gaService.emitEvent(`${id}-post-view`, 'blog-post', 'click');
    this.router.navigate(['/about/blog'], { queryParams: {title: id}});
    this.docId = id;
    this.modalService.showModal.next(true);
  }

}
