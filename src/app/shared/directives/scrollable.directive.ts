import { Directive, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';
import { ModalService } from './../services/modal.service';

@Directive({
  selector: '[appScrollable]'
})
export class ScrollableDirective {

  @Output() scrollPosition = new EventEmitter();
  @Output() scrollDirection = new EventEmitter();
  lastScrollTop = window.pageYOffset ||  document.documentElement.scrollTop;

  constructor(public el: ElementRef, private modalService: ModalService) { }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    try {
      const top = event.target.documentElement.scrollTop;
      const height = event.target.documentElement.scrollHeight;
      const offset = event.target.documentElement.offsetHeight;
      const currentScroll = window.pageYOffset ||  top;

      // to show/hide header

      setTimeout(() => {
        if (currentScroll > this.lastScrollTop && currentScroll  > 0) {
          this.scrollDirection.emit('down');
        } else if (currentScroll === this.lastScrollTop) {
          // do nothing
        } else if (currentScroll === 0) {
          this.scrollDirection.emit('zero');
        } else {
          this.scrollDirection.emit('up');
        }
        this.lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
      }, 250);

      // to scroll to last viewed photo

      this.modalService.scroll.subscribe((logic) => {
        if (logic) {
          this.modalService.showModal.subscribe((res) => {
            if (!res) {
              // to store y position of the user untill they click showModal
              this.modalService.yPosition.next(window.pageYOffset);
              sessionStorage.setItem('y', window.pageYOffset.toString());
            }
          });
        } else {
          sessionStorage.removeItem('y');
        }
      });

      // emit bottom event
      if ( top > height - offset - 1) {
        this.scrollPosition.emit('bottom');
      }

      // emit top event
      if (top === 0) {
        this.scrollPosition.emit('top');
      }

    } catch (err) {}
  }

}
