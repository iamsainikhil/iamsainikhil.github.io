import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalService } from '../../../shared/services/modal.service';
import { GAService } from './../../../shared/services/ga.service';
import { PaginationService } from './../../../shared/services/pagination.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.css']
})
export class ImageGalleryComponent implements OnInit {

  loadMore = false;

  showModal: boolean;
  docId: string;
  imageTitle: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public page: PaginationService,
    private modalService: ModalService,
    private gaService: GAService
  ) {}

  ngOnInit() {
     // query params
   this.route.queryParams.subscribe((params) => {
    if (params.title !== undefined) {
      this.imageTitle = params.title;
      this.openModal(this.imageTitle);
    } else {
      this.modalService.showModal.next(false);
    }
  });

    this.modalService.scroll.next(true);
    this.modalService.showModal.subscribe((res) => {
      this.showModal = res;
    });
    // since, _done is false in the service which stops fetching data
    // In order to revert the above condition, make _done true on init to load data
    this.page._done.next(false);
    this.page.init('photos', 'date', { limit: 10, reverse: false, prepend: false });
  }

  loadMoreImages() {
    this.loadMore = true;
  }

  scrollHandler(e) {
    if (e === 'bottom') {
      this.page.more();
    }
  }

  openModal(id) {
    this.gaService.emitEvent(`${id}-photo-view`, 'photo-view', 'button');
    this.router.navigate(['/about/photos'], { queryParams: {title: id}});
    this.docId = id;
    this.modalService.showModal.next(true);
  }

}
