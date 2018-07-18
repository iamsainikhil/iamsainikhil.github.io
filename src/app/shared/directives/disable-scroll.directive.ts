import { Directive, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Directive({
  selector: '[appDisableScroll]'
})
export class DisableScrollDirective implements OnInit {

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
keys = {37: 1, 38: 1, 39: 1, 40: 1};
scrollDisable: boolean;

  constructor(private modalService: ModalService) { }

  ngOnInit() {
    this.modalService.disbaleScroll.subscribe((res) => {
      this.scrollDisable = res;
      if (res) {
        this.disableScroll();
      } else {
        this.enableScroll();
      }
    });
  }

  preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault) {
        e.preventDefault();
    }
    e.returnValue = false;
  }

  preventDefaultForScrollKeys(e) {
      if (this.keys[e.keyCode]) {
          this.preventDefault(e);
          return false;
      }
  }

  disableScroll() {
    if (window.addEventListener) { // older FF
        window.addEventListener('DOMMouseScroll', this.preventDefault , false);
    }
    window.onwheel = this.preventDefault; // modern standard
    window.onmousewheel = document.onmousewheel = this.preventDefault; // older browsers, IE
    window.ontouchmove  = this.preventDefault; // mobile
    document.onkeydown  = this.preventDefault;
  }

  enableScroll() {
      if (window.removeEventListener) {
          window.removeEventListener('DOMMouseScroll', this.preventDefault, false);
      }
      window.onmousewheel = document.onmousewheel = null;
      window.onwheel = null;
      window.ontouchmove = null;
      document.onkeydown = null;
  }

}
